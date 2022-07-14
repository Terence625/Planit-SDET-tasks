# Planit-SDET-tasks

## Task one:

### Automation test cases:
1.  In home page, when clicking 'Start shopping' button or 'Shop' nav link, should navigate to shop page; When clicking 'Contact' nav link, should navigate to contact page; When clicking 'Login' button, should display login pop-up window'; When clicking 'Cart' button, should navigate to cart page.
2.  In login page, when inputing correct username and password, should login successfully; When inputing incorrect username or incorrect password, should not login successfully with error messages.
3.  In shop page, when clicking 'Buy' button under any product, should add the product to the cart and quantity of the product in cart should be the clicks of the button.
4.  In cart page, the subtotal of one product should be the price times the quantity, and total should be the sum of all subtotals. When changing the quantity in the inout box, the subtotal of that product and the total should change correspondingly.
5.  In cart page, when clicking the 'delete' button, should delete that product; When click the 'Empty cart' button, should delete all the products in the cart; When clicking the 'Checkout' button or 'checkout' link, should navigate to checkout page.
6.  In checkout page, when filling all the mandatory fields with correct formats, should submit successfully and display processing order loader; After checkout, should navigate to checkout successful page with order number displayed and the cart will be cleaned, and when clicking the 'Shopping Again' button, should navigate to shop page.
7.  In checkout page, when any mandatory field is blank or is filled with incorrect formats, should not submit successfully and display error messages.
8.  In contact page, when filling all the mandatory fields with correct formats, should submit successfully and display sending feedback loader; After submit, should navigate to feedback successful page, and when clicking 'Back' button, should navigate to contact page.
9.  In contact page, when any mandatory field is blank or is filled with incorrect formats, should not submit successfully and display error messages.
10. Performance automation test workflow: simulate users add products to cart, then checkout from cart, then finish payment. numbers of users according to the performance requirement of the system. 

## Task two:
Please download the repo and run ```npm run install``` (make sure you have npm installed), then run ```npm start```. them open ```localhost3000```.
### Challenge 1

### Challenge 5
