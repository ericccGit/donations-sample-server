interface IEntityWithId {
  id: string;
}

interface ISaveable<T> {
  save: () => T;
}

/**
 * Intended as a rough mock of the DB Models generated if
 * using Mongoose/Typegoose, that instead just stores the data
 * in memory.
 *
 * It is not a 100% accurate mock as that would have been
 * needlessly complicated for this excerise.
 *
 */
export class MockModel<T extends IEntityWithId> {
  data: T[];

  constructor(initialData: T[]) {
    this.data = [...initialData];
  }

  find = async () => {
    return this.data;
  };

  findById = async (id: string) => {
    return this.data.filter((x) => x.id === id);
  };

  create = async (newObject: T): Promise<ISaveable<T>> => {
    this.data.push(newObject);
    return new Promise((resolve) =>
      resolve({
        save: () => {
          console.log(`Saved object ${newObject.id}`);
          return newObject;
        },
      })
    );
  };

  findByCondition = async (cond: (ent: T) => boolean) => {
    return this.data.filter(cond);
  };

  deleteOne = async (id: string) => {
    const newArr = this.data.filter((x) => x.id !== id);
    this.data = [...newArr];
  };
}
