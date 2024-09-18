/* eslint-disable @typescript-eslint/no-explicit-any */
type ClasType<T = any> = { new (...args: any[]): T };
export type Token<T = any> = { type: ClasType<T>; id: symbol };
export const createToken = <K, T extends K = any>(
  type: ClasType<T>,
  name?: string
): Token<K> => ({ id: Symbol(name ?? type.name), type });

export class Container {
  static get currentContainer() {
    return Container._currentContainer;
  }
  private static _currentContainer: Container | null;
  private instances = new Map<symbol, any>();
  private providers: Array<Token> = [];
  register<T>(token: Token<T>): Container {
    this.providers.push(token);
    return this;
  }
  resolve<T>(token: Token<T>): T {
    Container._currentContainer = this;
    const finded = this.providers.find((p) => p.id === token.id);
    if (!finded) throw new Error();
    if (this.instances.has(token.id)) return this.instances.get(token.id);
    const instance = new finded.type();
    this.instances.set(token.id, instance);
    Container._currentContainer = null;
    return instance as T;
  }
  overrideResolve<T>(token: Token<T>, newImplClass: ClasType<T>) {
    const findedToken = this.providers.find((t) => t.id === token.id);
    if (!findedToken) throw new Error();
    findedToken.type = newImplClass;
    return this;
  }
}
export const Inject = <T>(token: Token<T>): T => {
  if (!Container.currentContainer)
    throw new Error(
      `Manual intaciation without params error: ${token} ${token.type}`
    );
  return Container.currentContainer.resolve(token);
};
