const Faq = () => {
  return (
    <>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          1. What countries do you ship to?
        </div>
        <div className="collapse-content">
          <p>
            Too often, people take it for granted that websites and E-Commerce
            stores will ship to them. After all, if you can find it online, it
            would make sense that you should be able to buy it, right?
            Unfortunately, that’s not always the case. If you’re only shipping
            domestic orders, or perhaps you only ship to certain countries, make
            sure that you spell that out for visitors ahead of time. The last
            thing you want is someone getting to the checkout before realizing
            they can’t get shipping to their country of residence. Make sure
            that you’re clear about where you will and won’t ship so that
            there’s never any question. Even if people can’t order from you,
            they’ll appreciate that you were upfront and honest and remember you
            in the future in case things change.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          2. What is your return/exchange policy?
        </div>
        <div className="collapse-content">
          <p>
            Another pressing question that every retail brand is tired of
            answering: how do you handle returns and exchanges? In addition to
            having a dedicated section or page regarding the return and exchange
            process on your website (do you have one yet?), you should have a
            question and answer on your FAQ page that explains it to your
            shoppers. Make sure that you’re clear about: Which products can be
            returned How long the return period lasts What the process involves
            How returns are issued How returns are shipped back The exchange
            process and when exchanges are an option Another pro tip here: don’t
            make people pay for return shipping. They’re already taking the
            extra step of returning something. Provide a prepaid shipping label
            or allow them to drop it off at a shipper or the USPS location
            nearest them so that it’s as hassle-free as possible. In your FAQ
            section, tell them about this feature.{" "}
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          3. What payment methods do you accept?
        </div>
        <div className="collapse-content">
          <p>
            There are a growing number of options for paying for transactions
            online. From credit cards and debit cards to electronic wallets,
            people want more and more versatility in their online shopping. You
            don’t have to offer it all, but make sure that you’re explicit about
            what you do accept. If you use a platform like Square or PayPal,
            make sure you let people know so they have that option in addition
            to others. Using your FAQ to cover basics like this will free up
            your time to focus on more pressing issues that require your
            attention. It will also help your audience feel like you want to
            provide them with as much insight and reassurance as you can so that
            they can have the transaction that they desire.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default Faq;
