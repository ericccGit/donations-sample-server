
interface IEntityWithId {
    id: string;
}

interface ISaveable<T> {
    save: () => T;
}

export class MockModel<T extends IEntityWithId >{

    data: T[];

    constructor(initialData: T[]){
        this.data = [...initialData];
    }

    find = () => {
        return this.data;
    }

    findById = (id: string) => {
        return this.data.filter(x => x.id === id)
    }

    create = async (newObject: T) : Promise<ISaveable<T>> => {
        this.data.push(newObject);
        return new Promise(resolve => resolve({save: () => {
            console.log(`Saved object ${newObject.id}`);
            return newObject;
        }}));
    }

    deleteOne = (id: string) => {
        const newArr = this.data.filter(x => x.id !== id)
        this.data = [...newArr];
    }
}