import { item } from 'src/items/interfaces/item.interface'
import { ItemsSchema } from '../../schemas/item.schema'


export const itemsStub = (): item => {
   return {
   //  id:'63ae27560a68e80fa38f6b17',
    name: 'MacBook Pro',
    description: 'This is a super computer',
    quantity: 70,
    price: 2000
   } 
}