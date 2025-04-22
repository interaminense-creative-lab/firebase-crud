import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  child,
  Database,
} from "firebase/database";

class FirebaseCRUD<T> {
  app: FirebaseApp;
  db: Database;
  collection: string;

  constructor(collection: string, firebaseConfig: FirebaseOptions) {
    this.app = initializeApp(firebaseConfig);
    this.db = getDatabase(this.app);

    this.collection = collection;
  }

  async create(id: string, data: T) {
    try {
      await set(ref(this.db, `${this.collection}/${id}`), data);
    } catch (error) {
      throw error;
    }
  }

  async read(id: string): Promise<{ [key: string]: T } | null> {
    try {
      const snapshot = await get(
        child(ref(this.db), `${this.collection}/${id}`)
      );
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async readAll(): Promise<{ [key: string]: T } | null> {
    try {
      const snapshot = await get(ref(this.db, this.collection));
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, newData: Partial<T>) {
    try {
      await update(ref(this.db, `${this.collection}/${id}`), newData);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      await remove(ref(this.db, `${this.collection}/${id}`));
    } catch (error) {
      throw error;
    }
  }
}

export default FirebaseCRUD;
