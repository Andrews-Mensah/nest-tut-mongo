import { Test, TestingModule } from "@nestjs/testing"
import { CreateItemDto } from "./dto/create-items.dto";
import { item } from "./interfaces/item.interface";
import { ItemsController } from "./items.controller"
import { ItemsService } from "./items.service"
import { ItemsSchema } from "./schemas/item.schema";
import { itemsStub } from "./test/stubs/items.stub";

jest.mock('./items.service');
describe('ItemsController', () => {
  let controller: ItemsController;
  let itemsService: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers: [ItemsService],
      controllers: [ItemsController],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    itemsService = module.get<ItemsService>(ItemsService);
    jest.clearAllMocks();
  });

  describe("find one item", ()=>{
            describe('when find one item is called', ()=>{
                let item: item;
                beforeEach(async ()=>{
                   item = await controller.findOne(itemsStub().id)
                })
    
                test('then it should call item service', ()=>{
                    expect(itemsService.findOne).toBeCalledWith(itemsStub().id)
                })
                
                test('then it should return an item', ()=>{
                  expect(item).toEqual(itemsStub())
                })
            })
    })

  describe("create item", ()=>{
      describe('when create item is called', ()=>{
          let item: item;
          let createItemDto: CreateItemDto
          beforeEach(async ()=>{
            createItemDto = {
              description: itemsStub().description,
              name: itemsStub().name,
              price: itemsStub().price,
              quantity: itemsStub().quantity
            }
             item = await controller.create(itemsStub())
          })

          test('then it should call item service', ()=>{
              expect(itemsService.create).toHaveBeenCalledWith(createItemDto )
          })

          test('then return item', ()=>{
            expect(item).toEqual(itemsStub())
          })
      })
    })
  
    describe("update item", ()=>{
      describe('when update item is called', ()=>{
          let item: item;
          let updateItemDto: CreateItemDto;
          beforeEach(async ()=>{
            updateItemDto = {
              name: 'MacBook Pro',
              description: 'This is a super computer',
              quantity: 70,
              price: 900000
            }
             item = await controller.updateOne(itemsStub().id, updateItemDto)
          })

          test('then it should call item service', ()=>{
              expect(itemsService.update).toBeCalledWith(itemsStub().id, updateItemDto)
          })

          test('then it should return item', ()=>{
            expect(item).toEqual(itemsStub())
          })
      })
})

describe("find all items", ()=>{
  describe('when get all items is called', ()=>{
      let item: item[];
      beforeEach(async ()=>{
          item = await controller.findAll()
      })

      test('then it should call item service', ()=>{
          expect(itemsService.findAll).toHaveBeenCalled()
      })

      test('then it should return users', ()=>{
        expect(item).toEqual([itemsStub()])
      })
  })
})


//delete unit test --- to do
// describe("delete item", ()=>{
//   describe('when delete items is called', ()=>{
//       let item: item;
//       beforeEach(async ()=>{
//           await controller.deleteOne(itemsStub().id)
//       })

//       test('then it should call item service', ()=>{
//           expect(itemsService.delete).toBeCalledWith(`Item with id: ${itemsStub().id} has been deleted`)
//       })
//   })
// })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
