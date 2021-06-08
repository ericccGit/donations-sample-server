import { v4 as uuid } from 'uuid';

interface IEntityWithId {
    id: string;
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

    create = (newObject: T) => {
        const newId = uuid();
        newObject.id = newId;
        this.data.push(newObject);
        return new Promise(resolve => resolve({save: () => {console.log(`Saved object ${newId}`)}}));
    }

    deleteOne = (id: string) => {
        const newArr = this.data.filter(x => x.id === id)
        this.data = [...newArr];
    }
}