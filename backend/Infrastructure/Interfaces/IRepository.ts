export interface IRepository<T> {
    create(entity: T): Promise<T>;
    getById(id: number): Promise<T | null>;
    getAll(): Promise<T[]>;
    update(id: number, entity: T): Promise<void>;
    delete(id: number): Promise<void>;
}