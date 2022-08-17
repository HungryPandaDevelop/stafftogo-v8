import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import RoboGate from 'robokassa-gate';

// Create config object
const config = {
  merchantLogin: 'myshopname',
  hashingAlgorithm: 'md5',
  password1: 'qwerty0123456789',
  password2: 'asdfgh0987654321',
  testMode: true,
  testPassword1: 'zxcvbn12345689',
  testPassword2: 'mnbvcx987654321',
  resultUrlRequestMethod: 'GET', // !ONLY ACCEPTED METHOD FOR NOW
  receipt: {
    sno: "usn_income",
    paymentMethod: "full_payment",
    paymentObject: "service",
    tax: "none"
  }
};

// Robokassa instance
const robokassa = new RoboGate(config);

const Subscription = () => {

  let newOrderURL = robokassa.generatePaymentURL({
    invId: 1,
    invSumm: 700,
    invDescr: 'test payment',
    email: 'example@email.com',
    isTest: true,
    items: [{ name: 'Product 1', quantity: 2, price: 200 }, { name: 'Product 2', price: 300 }],
    customData: {
      'any key': 'custom note'
    }
  });

  return (
    <TemplateAccount title='Чат' >

      <div className="main-full">
        <h2>subscription</h2>
        <div>
          <a href="#" className='btn btn-yellow'>получить подписку за рубль</a>
        </div>

        <form name="TinkoffPayForm" onsubmit="pay(this); return false;">
          <input class="tinkoffPayRow" type="hidden" name="terminalkey" value="TinkoffBankTest" />
          <input class="tinkoffPayRow" type="hidden" name="frame" value="true" />
          <input class="tinkoffPayRow" type="hidden" name="language" value="ru" />
          <input class="tinkoffPayRow" type="text" placeholder="Сумма заказа" name="amount" required />
          <input class="tinkoffPayRow" type="text" placeholder="Номер заказа" name="order" />
          <input class="tinkoffPayRow" type="text" placeholder="Описание заказа" name="description" />
          <input class="tinkoffPayRow" type="text" placeholder="ФИО плательщика" name="name" />
          <input class="tinkoffPayRow" type="text" placeholder="E-mail" name="email" />
          <input class="tinkoffPayRow" type="text" placeholder="Контактный телефон" name="phone" />
          <input class="tinkoffPayRow" type="submit" value="Оплатить" />
        </form>

      </div>
    </TemplateAccount >

  )
}

export default Subscription
