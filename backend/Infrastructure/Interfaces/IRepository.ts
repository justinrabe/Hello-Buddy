export interface IRepository<T> {
    create(entity: T): Promise<string>;
    getById(id: number): Promise<T | null>;
    getAll(): Promise<T[]>;
    update(id: number, entity: T): Promise<void>;
    delete(id: number): Promise<void>;
    findMultipleBy(key: keyof T, value: any): Promise<T[]>;
    FindOneBy(key: keyof T, value: any): Promise<T | null>;
}