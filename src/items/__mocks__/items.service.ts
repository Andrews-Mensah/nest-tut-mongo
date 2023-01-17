import { itemsStub } from "../test/stubs/items.stub"

export const ItemsService = jest.fn().mockReturnValue({
    findAll: jest.fn().mockResolvedValue([itemsStub()]),
    findOne: jest.fn().mockResolvedValue(itemsStub()),
    create:jest.fn().mockResolvedValue(itemsStub()),
    update:jest.fn().mockResolvedValue(itemsStub())
})