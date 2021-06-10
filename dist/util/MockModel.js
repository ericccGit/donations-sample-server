"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockModel = void 0;
/**
 * Intended as a rough mock of the DB Models generated if
 * using Mongoose/Typegoose, that instead just stores the data
 * in memory.
 *
 * It is not a 100% accurate mock as that would have been
 * needlessly complicated for this excerise.
 *
 */
class MockModel {
    constructor(initialData) {
        this.find = () => __awaiter(this, void 0, void 0, function* () {
            return this.data;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.data.filter(x => x.id === id);
        });
        this.create = (newObject) => __awaiter(this, void 0, void 0, function* () {
            this.data.push(newObject);
            return new Promise(resolve => resolve({ save: () => {
                    console.log(`Saved object ${newObject.id}`);
                    return newObject;
                } }));
        });
        this.findByCondition = (cond) => __awaiter(this, void 0, void 0, function* () {
            return this.data.filter(cond);
        });
        this.deleteOne = (id) => __awaiter(this, void 0, void 0, function* () {
            const newArr = this.data.filter(x => x.id !== id);
            this.data = [...newArr];
        });
        this.data = [...initialData];
    }
}
exports.MockModel = MockModel;
//# sourceMappingURL=MockModel.js.map