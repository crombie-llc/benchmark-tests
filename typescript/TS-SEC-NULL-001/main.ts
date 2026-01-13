}
 
   async getOrderTotal(orderId: string): Promise<number> {
     const order = await this.orderRepository.findOne(orderId);
     return order.items.reduce((sum, item) => sum + item.price, 0);
   }
 }