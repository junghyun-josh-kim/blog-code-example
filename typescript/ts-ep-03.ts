{
  /**
   * Singleton Pattern
   */

  class Singleton {
    private static instance: Singleton;

    private constructor() {
      // no direct instantiation
    }

    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }

      return Singleton.instance;
    }
  }

  /**
   * Factory Pattern
   */

  interface Lobster {}
}
