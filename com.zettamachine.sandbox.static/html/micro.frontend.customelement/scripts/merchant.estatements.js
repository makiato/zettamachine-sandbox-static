const messages = {
		hello: 'Hello'
};

class MerchantEStatements extends HTMLElement {

	constructor() {
		// If you define a constructor, always call super() first!
		// This is specific to CE and required by the spec.
		super();
	}
	
	connectedCallback() {
		this.innerHTML=`
			<div style="border:1px solid #ddd; width: 500px; height: 100px;padding: 10px">
				<form>
					Select Site: <select name="site" id="site">
					<option name="barangaroo">Barangaroo</option>
					<option name="kent">Kent</option>
					</select>
				</form>
				<button onclick="alert(${messages.hello});">${messages.hello}</button>
			</div>`;
	}

}

window.customElements.define('merchant-estatements', MerchantEStatements);