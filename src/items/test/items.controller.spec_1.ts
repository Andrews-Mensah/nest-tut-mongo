// import { Test } from "@nestjs/testing"
// import { item } from "../interfaces/item.interface";
// import { ItemsController } from "../items.controller"
// import { ItemsService } from "../items.service"
// import { itemsStub } from "./stubs/items.stub";


// jest.mock('../items.service');
// describe('ItemsController', ()=>{
//     let itemsController: ItemsController;
//     let itemsService: ItemsService;


//     beforeEach(async ()=>{
//         const moduleRef = await Test.createTestingModule({
//             imports:[],
//             controllers:[ItemsController],
//             providers:[ItemsService]
//         }).compile()

//         itemsController = moduleRef.get<ItemsController>(ItemsController);
//         itemsService = moduleRef.get<ItemsService>(ItemsService);
//         jest.clearAllMocks();
//     })

//     describe("find one item", ()=>{
//         describe('when find one item is called', ()=>{
//             let item: item;
//             beforeEach(async ()=>{
//                item = await itemsController.findOne(itemsStub().id)
//             })

//             test('then it should call item service', ()=>{
//                 expect(itemsService.findOne).toBeCalledWith(itemsStub().id)
//             })
//         })
//     })

    
// })