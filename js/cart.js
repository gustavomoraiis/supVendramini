// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor
    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  function myFunction() {
    
  }
  
  function displayCart() {
    // var inputNome = document.getElementById("inputNome").value;
    // document.getElementById("demo").innerHTML =  nome_cliente;

    var d = new Date();
    var protocolo = d.getTime();

    var dia = d.getDate();
    var mes = d.getMonth();
    var mes = mes + 1;
    var ano = d.getFullYear();
    var hora = d.getHours();
    var minutos = d.getMinutes();
    var segundos = d.getSeconds();

    const data_old1 = [dia, mes, ano];
    var data_var = (data_old1.join('%2F'));
    var data_txt = "%0aData";
    const data_old = [data_txt, data_var];
    var data_new = (data_old.join('%3A%20'));

    const horas_var = [hora, minutos, segundos];
    var horas = (horas_var.join('%3A'));
    const data_horas = [data_new, horas];
    var data = (data_horas.join('%20-%20'));

    var cartArray = shoppingCart.listCart();
    var output = "";
    var wpp = "";
    var nome_new = "";
    var produtos_old = "";
    var produtos = [];
    var total = 0;
    var linha = "%0a%0a%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0a%0a";

    var c_nome_var =  document.getElementById("inputNome").value;
    const c_nome_old = ['Nome', c_nome_var];
    var c_nome = (c_nome_old.join('%3A%20'));

    var c_logra_var = document.getElementById("inputLogradouro").value;
    const c_logra_old = ['Logradouro', c_logra_var];
    var c_logra = (c_logra_old.join('%3A%20'));

    var c_fone_var = document.getElementById("inputTelefone").value;
    const c_fone_old = ['Telefone', c_fone_var];
    var c_fone = (c_fone_old.join('%3A%20'));

    var c_retirada_var = document.getElementById("inputRetirada").value;
    const c_retirada_old = ['Retirada', c_retirada_var];
    var c_retirada = (c_retirada_old.join('%3A%20'));

    var c_pag_var = document.getElementById("inputPagamento").value;
    const c_pag_old = ['Pagamento', c_pag_var];
    var c_pag = (c_pag_old.join('%3A%20'));

    const dados_cliente_old = [c_nome, c_logra, c_fone, c_retirada, c_pag];
    var dados_cliente = (dados_cliente_old.join('%0a'));

    for(var i in cartArray) {
      const nome_qtd = [cartArray[i].name, cartArray[i].count];
      var produtos_old = (nome_qtd.join('%20*%7C%7C*%20Qtd%3A%20%20'));
      const nome_qtd_valorUni = [produtos_old, cartArray[i].price];
      var produtos_old = (nome_qtd_valorUni.join('%20*%7C%7C*%20Valor%20Uni%3A%20%20R$'));
      const nome_qtd_valorUni_valorGeral = [produtos_old,  cartArray[i].total];
      var produtos_old = (nome_qtd_valorUni_valorGeral.join('%20*%7C%7C*%20Valor%3A%20%20R$'));
      produtos_old = produtos_old.replace(/_/g, " ");
      produtos.push(produtos_old);
      var nome_old = cartArray[i].name;
      var nome_new = nome_old.replace(/_/g, " ");
      output += "<tr class'row'>"
        + "<td class=''>" + nome_new + "</td>" 
        + "<td class=''>(R$ " + cartArray[i].price + ")</td>"
        + "<td class=''><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
        + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
       
        + "<td class=''><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = " 
        + "<td class=''>R$ " + cartArray[i].total + "</td>" 
        +  "</tr>";

        total += parseFloat(cartArray[i].total); 
    }
    wpp += "<a target='_blank' href='https://api.whatsapp.com/send?phone=5544998780912&text=Protocolo%3A%20"+protocolo+""+data+""+linha+"*CLIENTE%3A*%20%0a"+dados_cliente+""+linha+"*PRODUTOS%3A*%20%0a"+produtos.join("%0a%0a")+""+linha+"Valor%20Total%3A%20R%24%20"+total+"'>"
        + "<button type='button' class='btn btn-success'>Confirmar <i class='fab fa-whatsapp'></i></button>" 
        +  "</a>";
    $('.btn-wpp').html(wpp);
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();
  