class APIUtils

{

    Constructor(apiContext,loginPayload)
    {

        this.apiContext = apiContext;
        this.loginPayload = loginPayload;

    }
async getToken()
{
const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: this.loginPayload
     
    }
  );

  await expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;

  console.log('Token',token);
  return tokesn;

}

async createOrder(orderpayload)

{

const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    
    {
          
     data : orderpayload,
     headers : {

         'Authorization' : this.getToken(),
         'Content-Type' : 'application/json'

     },

  })

  const orderResponseJson = await orderResponse.json();
  console.log(orderResponseJson);
  orderid = orderResponseJson.orders[0];
  return orderid;
}

}
module.exports = {APIUtils};