function placeAnOrder(orderNumber){  // this represents a user trying to connect to my website to get some sort of data
    console.log("Customer order:", orderNumber);

    cookAndDeliverFood(function (){
        console.log("Delivered food order:", orderNumber);
    });
}

// Simulate a 5 second operation of "quereing the database"
function cookAndDeliverFood(callback){ // this represents the time consuming operation of connecting to my database
    setTimeout(callback, 5000); //setTimeout function sets a "schedule" for something to be completed at,
                                // in this case its a schedule to print the "deliver food" text in 5 seconds.
                                // It doesnt simply pause the program, everything else keeps on running
}

// Simulate users web requests
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);