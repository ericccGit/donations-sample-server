"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockModel = void 0;
const uuid_1 = require("uuid");
class MockModel {
    constructor(initialData) {
        this.find = () => {
            return this.data;
        };
        this.findById = (id) => {
            return this.data.filter(x => x.id === id);
        };
        this.create = (newObject) => {
            const newId = uuid_1.v4();
            newObject.id = newId;
            this.data.push(newObject);
            return new Promise(resolve => resolve({ save: () => { console.log(`Saved object ${newId}`); } }));
        };
        this.deleteOne = (id) => {
            const newArr = this.data.filter(x => x.id === id);
            this.data = [...newArr];
        };
        this.data = [...initialData];
    }
}
exports.MockModel = MockModel;
//# sourceMappingURL=mock-model.js.map