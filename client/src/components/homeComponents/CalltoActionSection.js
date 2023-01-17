import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Hope you enjoyed this mock/fake eShop website</h2>
              <p>This section is a mock Call-To-Action!</p>
              <form className="form-section">
                <input placeholder="Mock field to enter NO email here" name="email" type="email" />
                <input value="Submit" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
