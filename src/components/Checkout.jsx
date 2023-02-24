import React from "react";



const Checkout = () =>{
 

return(
<div>
<form id="frm_ePaycoCheckoutOpen" 
              name="frm_ePaycoCheckoutOpen" 
              method="POST" 
              action="https://secure.payco.co/checkoutopen.php">
            
              <input name="p_cust_id_cliente" type="hidden" value="49820"/>
              <input name="p_key" type="hidden" value="50c808e69a4bacc83d5e08fe29fd5bb7f8f97fcc"/>
              <input name="p_id_factura" type="hidden" value=""/>
              <input name="p_description" type="hidden" value="Hospedaje Mihaus"/>
              <input name="p_detalle" type="hidden" value=""/>
              <input name="p_referencia" type="hidden" value=""/>
              <input name="p_test_request" type="hidden" value="false"/>
              <input name="p_url_respuesta" type="hidden" value=""/>
              <input name="p_url_confirmacion" type="hidden" value=""/>
              <input type="image" id="imagen" src="https://multimedia.epayco.co/dashboard/btns/btn5.png" alt=""/>
              <input type="hidden" id="idboton" name="idboton" value="50720"/>
                                
        </form>
</div>
)}

export default Checkout