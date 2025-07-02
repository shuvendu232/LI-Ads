let divId1 = document.getElementById("reLocation_2");
let j = 0;
// Business Location Radio Buttons
let buDivId1 = document.getElementById("buLocation_2");
let buJ = 0;
// Add similar loops for location1 and location2 as in real estate
for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.className = "form-check ps-0";
    divId1.appendChild(div);
    let input = document.createElement("input");
    input.className = "form-check-input";
    input.type = "radio";
    input.name = "reLocation";
    input.id = "reLocation" + j;
    input.value = location1[i];
    input.checked = false;
    input.disabled = true;
    div.appendChild(input);
    let label = document.createElement("label");
    label.className = "custom-control-label";
    label.htmlFor = "reLocation" + j;
    label.innerHTML = location1[i];
    div.appendChild(label);
    j += 1;
}
let divId2 = document.getElementById("reLocation_3");
for (let i = 10; i < 20; i++) {
    let div = document.createElement("div");
    div.className = "form-check ps-0";
    divId2.appendChild(div);
    let input = document.createElement("input");
    input.className = "form-check-input";
    input.type = "radio";
    input.name = "reLocation";
    input.id = "reLocation" + j;
    input.value = location1[i];
    input.checked = false;
    input.disabled = true;
    div.appendChild(input);
    let label = document.createElement("label");
    label.className = "custom-control-label";
    label.htmlFor = "reLocation" + j;
    label.innerHTML = location1[i];
    div.appendChild(label);
    j++;
}
let divId3 = document.getElementById("reLocation_4");
for (let i = 20; i < 28; i++) {
    let div = document.createElement("div");
    div.className = "form-check ps-0";
    divId3.appendChild(div);
    let input = document.createElement("input");
    input.className = "form-check-input";
    input.type = "radio";
    input.name = "reLocation";
    input.id = "reLocation" + j;
    input.value = location1[i];
    input.checked = false;
    input.disabled = true;
    div.appendChild(input);
    let label = document.createElement("label");
    label.className = "custom-control-label";
    label.htmlFor = "reLocation" + j;
    label.innerHTML = location1[i];
    div.appendChild(label);
    j++;
}
let divId4 = document.getElementById("reLocation_5");
for (let i = 0; i < location2.length; i++) {
    let div = document.createElement("div");
    div.className = "form-check ps-0";
    divId4.appendChild(div);
    let input = document.createElement("input");
    input.className = "form-check-input";
    input.type = "radio";
    input.name = "reLocation";
    input.id = "reLocation" + j;
    input.value = location2[i];
    input.checked = false;
    input.disabled = true;
    div.appendChild(input);
    let label = document.createElement("label");
    label.className = "custom-control-label";
    label.htmlFor = "reLocation" + j;
    label.innerHTML = location2[i];
    div.appendChild(label);
    j++;
}

function activateRadioOptions(id, className) {
    var idSelector = document.getElementById(id);
    //   console.log(idSelector);
    var classSelector = "." + className + " input";
    //   console.log(classSelector);
    var selectors = document.querySelectorAll(classSelector);
    //   console.log(selectors);
    if (idSelector.checked) {
        for (var i = 0, len = selectors.length; i < len; i++) {
            selectors[i].removeAttribute("disabled");
        }
        // document
        //   .querySelectorAll(".garage-space input")
        //   .removeAttribute("disabled");
        // document.getElementById("first").removeAttribute("disabled");
        // document.getElementById("second").removeAttribute("disabled");
    } else {
        for (var i = 0, len = selectors.length; i < len; i++) {
            selectors[i].disabled = true;
            selectors[i].checked = false;
        }
        // document.querySelectorAll(".garage-space input").disabled = true;
        // document.getElementById("first").disabled = true;
        // document.getElementById("second").disabled = true;
    }
}

function getValue(id, target) {
    var idSelector = document.getElementById(id);
    var targetSelector = document.getElementById(target);
    if (idSelector.value == "Selling") {
        targetSelector.innerHTML = "Price:";
    } else if (idSelector.value == "Buying") {
        targetSelector.innerHTML = "Budget:";
    } else if (idSelector.value == "wife") {
        targetSelector.innerHTML = "Looking:";
    }
}

// document.addEventListener("keydown", outputTemplate());
// document.addEventListener("click", outputTemplate());
// var activeElementID = "";
// var navPillsLink = document.querySelectorAll(".nav-pills .nav-link");
// for (var i = 0, len = navPillsLink.length; i < len; i++) {
//   navPillsLink[i].addEventListener("click", function (event) {
//     event.preventDefault();
//     getActiveTab();
//   });
// }
// function getActiveTab() {
//   activeElementID = document
//     .querySelector(".tab-pane.active")
//     .getAttribute("id");
// }
// console.log(activeElementID);
// console.log(activeElement);

// var realEstate = document.getElementById("real-estate");
// document.addEventListener("click", function (e) {
//   var activeElementID = "";
//   setTimeout(function () {
//     activeElementID = document
//       .querySelector(".tab-pane.active")
//       .getAttribute("id");
//   }, 500);
// });
// console.log(activeElementID);
initTemplate("#real-estate", realEstateTemplate);
const tabEl = document.querySelectorAll('a[data-bs-toggle="tab"]');
for (var i = 0, len = tabEl.length; i < len; i++) {
    tabEl[i].addEventListener("shown.bs.tab", (event) => {
        console.log(event.target); // newly activated tab
        var activeElementID = event.target.getAttribute("href");
        console.log(activeElementID);
        //console.log(event.relatedTarget); // previous active tab

        if (activeElementID == "#real-estate") {
            initTemplate("#real-estate", realEstateTemplate);
        } else if (activeElementID == "#auto") {
            initTemplate("#auto", autoTemplate);
        } else if (activeElementID == "#other") {
            initTemplate("#other", otherTemplate);
        } else if (activeElementID == "#Business") {
            initTemplate("#Business", BusinessTemplate);
        }
    });
}

function initTemplate(activeElementID, templateFunction) {
    var activeInputs = document.querySelectorAll(activeElementID + " input");

    // टैब बदलते ही आउटपुट को क्लियर करें
    document.getElementById("finalOutput").value = "";

    templateFunction();

    for (var i = 0, len = activeInputs.length; i < len; i++) {
        activeInputs[i].addEventListener("change", function(event) {
            event.preventDefault();
            templateFunction();
        });
    }
}




// if (document.querySelector(".tab-pane.active").getAttribute("id") == "auto") {
//   var activeInputs = document.querySelectorAll(
//     "#" + activeElementID + " input"
//   );
//   autoTemplate();
//   for (var i = 0, len = activeInputs.length; i < len; i++) {
//     //   console.log(tabEl[i]);
//     activeInputs[i].addEventListener("change", function (event) {
//       event.preventDefault();
//       // console.log(this);
//       // console.log(activeInputs[i]);
//       autoTemplate();
//     });
//   }
// }

// ----- REAL ESTATE TEMPLATE FUNCTION ----- //
function realEstateTemplate() {
    var rePurpose = document.getElementsByName("rePurpose");
    for (var i = 0, len = rePurpose.length; i < len; i++) {
        if (rePurpose[i].checked) {
            var rePurposeValue = rePurpose[i].value;
        }
    }

    var reType = document.getElementsByName("reType");
    for (var i = 0, len = reType.length; i < len; i++) {
        if (reType[i].checked) {
            var reTypeValue = reType[i].value;
        }
    }

    var reNumberValue = document.getElementById("reNumber").value;

    var reGarden = document.getElementById("reGarden");
    if (reGarden.checked) {
        var reGardenValue = reGarden.value;
    }

    var garageSpace = document.getElementsByName("garageSpace");
    for (var i = 0, len = garageSpace.length; i < len; i++) {
        if (garageSpace[i].checked) {
            var reGarageSpace = garageSpace[i].value;
        }
    }

    var warehouse = document.getElementsByName("warehouse");
    for (var i = 0, len = warehouse.length; i < len; i++) {
        if (warehouse[i].checked) {
            var reWarehouse = warehouse[i].value;
        }
    }

    var reCustomInterior = document.getElementById("reCustomInterior");
    if (reCustomInterior.checked) {
        var reCustomInteriorValue = reCustomInterior.value;
    }

    var reInsurance = document.getElementById("reInsurance");
    if (reInsurance.checked) {
        var reInsuranceValue = reInsurance.value;
    }

    var reHelipad = document.getElementById("reHelipad");
    if (reHelipad.checked) {
        var reHelipadValue = reHelipad.value;
    }

    var reSwimmingPool = document.getElementById("reSwimmingPool");
    if (reSwimmingPool.checked) {
        var reSwimmingPoolValue = reSwimmingPool.value;
    }

    var reTennisCourt = document.getElementById("reTennisCourt");
    if (reTennisCourt.checked) {
        var reTennisCourtValue = reTennisCourt.value;
    }



    var reDriveway = document.getElementById("reDriveway");
    if (reDriveway.checked) {
        var reDrivewayValue = reDriveway.value;
    }

    var reBackyard = document.getElementById("reBackyard");
    if (reBackyard.checked) {
        var reBackyardValue = reBackyard.value;
    }

    var reView = document.getElementsByName("reView");
    for (var i = 0, len = reView.length; i < len; i++) {
        if (reView[i].checked) {
            var reViewValue = reView[i].value + " view";
        }
    }

    var reValue = document.getElementById("reValue").innerHTML;

    var rePrice = document.getElementById("rePrice").value;

    var beforeLocation = document.getElementsByName("beforeLocation");
    var beforeLocationValue = "";
    for (var i = 0, len = beforeLocation.length; i < len; i++) {
        if (beforeLocation[i].checked) {
            beforeLocationValue = " " + beforeLocation[i].value;
        }
    }

    var reLocation = document.getElementsByName("reLocation");
    var reLocationValue = "";
    for (var i = 0, len = reLocation.length; i < len; i++) {
        if (reLocation[i].checked) {
            reLocationValue = " " + reLocation[i].value;
        }
    }

    //   console.log(reGarden);
    var reFeatures = {};

    //   if (reNumberValue) {
    //     reFeatures.reNumberValue = reNumberValue;
    //   }
    if (reGardenValue) {
        reFeatures.reGardenValue = reGardenValue;
    }
    if (reGarageSpace) {
        reFeatures.reGarageSpace = reGarageSpace;
    }
    if (reWarehouse) {
        reFeatures.reWarehouse = reWarehouse;
    }
    if (reCustomInteriorValue) {
        reFeatures.reCustomInteriorValue = reCustomInteriorValue;
    }
    if (reInsuranceValue) {
        reFeatures.reInsuranceValue = reInsuranceValue;
    }
    if (reHelipadValue) {
        reFeatures.reHelipadValue = reHelipadValue;
    }
    if (reSwimmingPoolValue) {
        reFeatures.reSwimmingPoolValue = reSwimmingPoolValue;
    }
    if (reTennisCourtValue) {
        reFeatures.reTennisCourtValue = reTennisCourtValue;
    }

    if (reDrivewayValue) {
        reFeatures.reDrivewayValue = reDrivewayValue;
    }
    if (reBackyardValue) {
        reFeatures.reBackyardValue = reBackyardValue;
    }
    if (reViewValue) {
        reFeatures.reViewValue = reViewValue;
    }
    //   if (rePrice) {
    //     reFeatures.rePrice = rePrice;
    //   }
    //   if (reValueMValue) {
    //     reFeatures.reValueMValue = reValueMValue;
    //   }

    var featureFormatted = formatArray(reFeatures);

    // console.log(featureFormatted);

    var beforeType = "";
    if (reNumberValue) {
        beforeType = "";
    } else if (!reNumberValue && reTypeValue == "apartment") {
        beforeType = " an";
    } else if (!reNumberValue) {
        beforeType = " a";
    }

    if (reNumberValue) {
        var beforeNumber = " №";
    } else {
        beforeNumber = "";
    }

    if (featureFormatted) {
        var beforeFeatures = " with ";
    } else {
        beforeFeatures = "";
    }


    var reValueM = document.getElementById("reValueM");
    var reValueK = document.getElementById("reValueK");

    // Initialize reValueMValue and reValueKValue
    var reValueMValue = "";
    var reValueKValue = "";

    // Handle reValueM
    if (reValueM.checked) {
        reValueMValue = reValueM.value;
    } else {
        reValueMValue = "";
    }

    // Handle reValueK
    if (reValueK.checked) {
        reValueKValue = reValueK.value;
        reValueM.checked = false; // Reset reValueM if reValueK is checked
        reValueMValue = ""
    } else {
        reValueKValue = "";
    }

    // Set the price display
    var beforePrice;
    if (rePrice) {
        beforePrice = " $";
    } else {
        beforePrice = " Negotiable.";
        reValueM.checked = false; // Reset reValueM if price is not set
        reValueMValue = "";
        reValueK.checked = false; // Also reset reValueK if price is not set
        reValueKValue = "";
    }

    var priceFormatted = formatCurrency(rePrice);

    document.getElementById("finalOutput").value =
        rePurposeValue +
        beforeType +
        " " +
        reTypeValue +
        beforeNumber +
        reNumberValue +
        beforeFeatures +
        featureFormatted +
        beforeLocationValue +
        reLocationValue +
        ". " +
        reValue +
        beforePrice +
        priceFormatted +
        reValueKValue +
        reValueMValue;
}


function otherTemplate() {
    document.getElementById("finalOutput").value = ""; // पहले आउटपुट क्लियर करें

    var otherPurpose = document.getElementsByName("otherPurpose");
    var otherPurposeValue = "";
    for (var i = 0, len = otherPurpose.length; i < len; i++) {
        if (otherPurpose[i].checked) {
            otherPurposeValue = otherPurpose[i].value;
        }
    }

    var otherItem1Value = document.getElementById("otherItem1").value.trim();
    var otherItem2Value = document.getElementById("otherItem2").value.trim();
    var otherItem3Value = document.getElementById("otherItem3").value.trim();

    var itemsArray = [];
    if (otherItem1Value) itemsArray.push(otherItem1Value);
    if (otherItem2Value) itemsArray.push(otherItem2Value);
    if (otherItem3Value) itemsArray.push(otherItem3Value);
    var itemsFormatted = formatArray(itemsArray);

    var otherValue = document.getElementById("otherValue").innerHTML;
    var otherPrice = document.getElementById("otherPrice").value;
    var priceFormatted = formatCurrency(otherPrice);

    var otherPriceM = document.getElementById("otherPriceM").checked ? " Million." : "";
    var otherPriceK = document.getElementById("otherPriceK").checked ? ".000" : ""; // Getting value from Thousnad from others
    var otherPriceE = document.getElementById("otherPriceE").checked ? " each." : "";

    var beforePrice = otherPrice ? " $" : " Negotiable.";

    // **Event & Services Section**
    var selectedService = document.getElementById("otherServices").value;
    var eventText = selectedService ? selectedService : "";

    // **Location Selection**
    var selectedLocation = document.querySelector('input[name="eventLocation"]:checked');
    var locationText = selectedLocation ? " at " + selectedLocation.value : "";

    // **Final Output**
    document.getElementById("finalOutput").value =
        otherPurposeValue + " " + itemsFormatted + "" +
        eventText + locationText + ". " +
        otherValue + beforePrice + priceFormatted + otherPriceK + otherPriceM + otherPriceE;
}



function autoTemplate() {
    var autoPurpose = document.getElementsByName("autoPurpose");
    for (var i = 0, len = autoPurpose.length; i < len; i++) {
        if (autoPurpose[i].checked) {
            var autoPurposeValue = autoPurpose[i].value;
        }
    }

    var autoNameValue = ' "' + document.getElementById("autoName").value + '"';

    var autoValue = document.getElementById("autoValue").innerHTML;

    var autoPrice = document.getElementById("autoPrice").value;

    var priceFormatted = formatCurrency(autoPrice);

    var autoPriceM = document.getElementById("autoPriceM");

    if (autoPriceM.checked) {
        var autoPriceMValue = autoPriceM.value;
    } else {
        autoPriceMValue = "";
    }
    var autoPriceK = document.getElementById("autoPriceK");
    if (autoPriceK.checked) {
        var autoPriceKValue = autoPriceK.value;
        autoPriceM.checked = false;
        autoPriceMValue = "";
    } else {
        autoPriceKValue = "";
    }
    if (autoPrice) {
        var beforePrice = " $";
    } else {
        beforePrice = " Negotiable.";
        autoPriceM.checked = false;
        autoPriceMValue = "";
        autoPriceMValue = "";
        autoPriceK.checked = false;
        autoPriceKValue = "";
    }

    var features = {};

    var autoConfig = document.getElementsByName("autoConfig");
    for (var i = 0, len = autoConfig.length; i < len; i++) {
        if (autoConfig[i].checked) {
            var autoConfigValue = autoConfig[i].value;
        }
    }

    var autoVisuals = document.getElementById("autoVisuals");
    if (autoVisuals.checked) {
        var autoVisualsValue = autoVisuals.value;
    }

    var autoLumiWheels = document.getElementById("autoLumiWheels");
    if (autoLumiWheels.checked) {
        var autoLumiWheelsValue = autoLumiWheels.value;
    }

    var autoInsurance = document.getElementById("autoInsurance");
    if (autoInsurance.checked) {
        var autoInsuranceValue = autoInsurance.value;
    }

    var autoTurboKit = document.getElementById("autoTurboKit");
    if (autoTurboKit.checked) {
        var autoTurboKitValue = autoTurboKit.value;
    }

    var autoDriftKit = document.getElementById("autoDriftKit");
    if (autoDriftKit.checked) {
        var autoDriftKitValue = autoDriftKit.value;
    }

    if (autoConfigValue) {
        features.autoConfigValue = autoConfigValue;
    }
    if (autoVisualsValue) {
        features.autoVisualsValue = autoVisualsValue;
    }
    if (autoLumiWheelsValue) {
        features.autoLumiWheelsValue = autoLumiWheelsValue;
    }
    if (autoInsuranceValue) {
        features.autoInsuranceValue = autoInsuranceValue;
    }
    if (autoTurboKitValue) {
        features.autoTurboKitValue = autoTurboKitValue;
    }
    if (autoDriftKitValue) {
        features.autoDriftKitValue = autoDriftKitValue;
    }

    var featureFormatted = formatArray(features);

    if (featureFormatted) {
        var beforeFeatures = " with ";
    } else {
        beforeFeatures = "";
    }

    document.getElementById("finalOutput").value =
        autoPurposeValue +
        autoNameValue +
        beforeFeatures +
        featureFormatted +
        ". " +
        autoValue +
        beforePrice +
        priceFormatted +
        autoPriceKValue +
        autoPriceMValue;
}



function BusinessTemplate() {
    var buPurpose = document.getElementsByName("buPurpose");
    var buPurposeValue = "";
    for (var i = 0, len = buPurpose.length; i < len; i++) {
        if (buPurpose[i].checked) {
            buPurposeValue = buPurpose[i].value;
        }
    }

    // Get the selected business type
    var buType = document.getElementById("Businessname");
    var buTypeValue = buType.value;

    // Get the business number
    var buNumberValue = document.getElementById("buNumber").value;

    // Get the value description
    var buValue = document.getElementById("buValue").innerHTML;

    // Get the price
    var buPrice = document.getElementById("buPrice").value;

    // Handle the "Million" and "K" value checkboxes
    var buValueM = document.getElementById("buValueM");
    var buValueK = document.getElementById("buValueK");

    var buValueMValue = buValueM.checked ? buValueM.value : "";
    var buValueKValue = buValueK.checked ? buValueK.value : "";

    // If Business Number is not provided, add "business" after the type
    var finalBusinessType = buNumberValue ? buTypeValue + " №" + buNumberValue : buTypeValue + " business";

    // Set price display
    var beforePrice = buPrice ? " $" : " Negotiable.";
    if (!buPrice) {
        buValueM.checked = false;
        buValueK.checked = false;
        buValueMValue = "";
        buValueKValue = "";
    }

    var priceFormatted = formatCurrency(buPrice);

    document.getElementById("finalOutput").value =
        buPurposeValue +
        " " +
        finalBusinessType +
        ". " +
        buValue +
        beforePrice +
        priceFormatted +
        buValueKValue +
        buValueMValue;
}

document.addEventListener("DOMContentLoaded", function() {
    let buDivId1 = document.getElementById("buLocation_2");
    let buDivId2 = document.getElementById("buLocation_3");
    let buDivId3 = document.getElementById("buLocation_4");
    let buDivId4 = document.getElementById("buLocation_5");
    let buJ = 0;

    if (typeof location1 !== "undefined") {
        for (let i = 0; i < 10; i++) {
            let div = document.createElement("div");
            div.className = "form-check ps-0";
            buDivId1.appendChild(div);
            let input = document.createElement("input");
            input.className = "form-check-input";
            input.type = "radio";
            input.name = "buLocation";
            input.id = "buLocation" + buJ;
            input.value = location1[i];
            input.checked = false;
            input.disabled = true;
            div.appendChild(input);
            let label = document.createElement("label");
            label.className = "custom-control-label";
            label.htmlFor = "buLocation" + buJ;
            label.innerHTML = location1[i];
            div.appendChild(label);
            buJ++;
        }

        for (let i = 10; i < 20; i++) {
            let div = document.createElement("div");
            div.className = "form-check ps-0";
            buDivId2.appendChild(div);
            let input = document.createElement("input");
            input.className = "form-check-input";
            input.type = "radio";
            input.name = "buLocation";
            input.id = "buLocation" + buJ;
            input.value = location1[i];
            input.checked = false;
            input.disabled = true;
            div.appendChild(input);
            let label = document.createElement("label");
            label.className = "custom-control-label";
            label.htmlFor = "buLocation" + buJ;
            label.innerHTML = location1[i];
            div.appendChild(label);
            buJ++;
        }

        for (let i = 20; i < 28; i++) {
            let div = document.createElement("div");
            div.className = "form-check ps-0";
            buDivId3.appendChild(div);
            let input = document.createElement("input");
            input.className = "form-check-input";
            input.type = "radio";
            input.name = "buLocation";
            input.id = "buLocation" + buJ;
            input.value = location1[i];
            input.checked = false;
            input.disabled = true;
            div.appendChild(input);
            let label = document.createElement("label");
            label.className = "custom-control-label";
            label.htmlFor = "buLocation" + buJ;
            label.innerHTML = location1[i];
            div.appendChild(label);
            buJ++;
        }
    }

    if (typeof location2 !== "undefined") {
        for (let i = 0; i < location2.length; i++) {
            let div = document.createElement("div");
            div.className = "form-check ps-0";
            buDivId4.appendChild(div);
            let input = document.createElement("input");
            input.className = "form-check-input";
            input.type = "radio";
            input.name = "buLocation";
            input.id = "buLocation" + buJ;
            input.value = location2[i];
            input.checked = false;
            input.disabled = true;
            div.appendChild(input);
            let label = document.createElement("label");
            label.className = "custom-control-label";
            label.htmlFor = "buLocation" + buJ;
            label.innerHTML = location2[i];
            div.appendChild(label);
            buJ++;
        }
    }
    const serviceDropdown = document.getElementById("otherServices");
    const locationSection = document.getElementById("locationSection");

    // Show location options only for specific events
    serviceDropdown.addEventListener("change", function() {
        const selectedService = serviceDropdown.value;

        // List of services that require a location
        const servicesWithLocation = ["party", "wedding"];

        if (servicesWithLocation.includes(selectedService)) {
            locationSection.style.display = "block"; // Show location selection
        } else {
            locationSection.style.display = "none"; // Hide location selection
        }
    });
});

function validateDatingAd() {
    let nameInput = document.getElementById("datingName").value.trim();
    let category = document.getElementById("datingCategory").value;
    let outputBox = document.getElementById("datingOutput");

    // Ensure first and last name are provided
    let nameParts = nameInput.split(" ");
    if (nameParts.length < 2) {
        outputBox.value = "❌ Rejected: Full first and last name must be provided.";
        return;
    }

    // Capitalize first letter of each name
    let formattedName = nameParts.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

    // Check if name exists in the database (Simulation)
    if (!isNameInDatabase(formattedName)) {
        outputBox.value = "❌ Rejected: Person not found in the GRAND RP mail.";
        return;
    }

    // Generate Ad Output
    let finalAd = `Looking for ${formattedName}.`;
    outputBox.value = finalAd;
}

// Simulated Database Check Function
function isNameInDatabase(name) {
    const databaseNames = ["Carl Jordan", "Nyx Kleps", "Kim Abergil", "John Doe"]; // Example database
    return databaseNames.includes(name);
}

// tabEl.addEventListener("shown.bs.tab", function (event) {
//   console.log(event.target); // newly activated tab
//   event.relatedTarget; // previous active tab
// });
function formatArray(arr) {
    var outStr = "";
    var arrLength = Object.keys(arr).length;
    var arrValues = Object.values(arr);
    if (arrLength === 1) {
        outStr = arrValues[0];
        // console.log(outStr);
    } else if (arrLength === 2) {
        //joins all with "and" but no commas
        //example: "bob and sam"
        outStr = arrValues.join(" and ");
    } else if (arrLength > 2) {
        //joins all with commas, but last one gets ", and" (oxford comma!)
        //example: "bob, joe, and sam"
        outStr = arrValues.slice(0, -1).join(", ") + " and " + arrValues.slice(-1);
    }
    //   console.log(outStr);
    return outStr;
}

function formatArray1(arr) {
    var outStr = "";
    var arrLength = Object.keys(arr).length;
    var arrValues = Object.values(arr);
    if (arrLength === 1) {
        //joins all with "and" but no commas
        //example: "bob and sam"
        outStr = arrValues.join(" and ");
    } else if (arrLength > 1) {
        //joins all with commas, but last one gets ", and" (oxford comma!)
        //example: "bob, joe, and sam"
        outStr = arrValues.slice(0, -1).join(", ") + " and " + arrValues.slice(-1);
    }
    //   console.log(outStr);
    return outStr;
}
// function formatDollar(num) {
//   //   var p = num.toFixed(2).split(".");
//   var p = num;
//   p.toFixed().replace(/\d(?=(\d{3})+\.)/g, "$&,");
//   //   return (
//   //     "$" +
//   //     p
//   //       .split("")
//   //       .reverse()
//   //       .reduce(function (acc, num, i, orig) {
//   //         return num + (num != "" && i && !(i % 3) ? "," : "");
//   //       }, "") +
//   //     "." +
//   //     p[1]
//   //   );
// }
function formatCurrency(amount) {
    return amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

// location1.forEach((item) => {
//   var j = 0;
//   let div = document.createElement("div");
//   div.className = "form-check ps-0";
//   divId.appendChild(div);
//   let input = document.createElement("input");
//   input.className = "form-check-input";
//   input.type = "radio";
//   input.name = "reLocation";
//   input.id = "reLocation" + j;
//   input.value = item;
//   input.disabled = true;
//   div.appendChild(input);
// });



function clearForm(id, templateFunction) {
    var form = document.getElementById(id);
    form.reset();
    document.getElementById("finalOutputForm").reset();
    templateFunction();
}

function copyText() {
    // Get the text field
    var copyText = document.getElementById("finalOutput");

    // Create temporary textarea element
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = copyText.value;

    // Add to DOM to enable selection
    document.body.appendChild(tempTextArea);

    // Select the text
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    try {
        // Copy the text using modern Clipboard API
        navigator.clipboard.writeText(tempTextArea.value).then(() => {
            // Optional: Show success feedback
            alert("Text copied to clipboard!");
        });
    } catch (err) {
        // Fallback for older browsers
        document.execCommand("copy");
    }

    // Clean up DOM
    document.body.removeChild(tempTextArea);
}

function clearFields(fieldId, callback) {
    event.preventDefault(); // फॉर्म रीसेट को रोकने के लिए
    document.getElementById(fieldId).value = "";
    callback();
}

function generateWorkAd() {
    let workType = document.querySelector('input[name="workType"]:checked').value;
    let workRole = document.getElementById("workRole").value;
    let salary = document.getElementById("workSalary").value;
    let salaryM = document.getElementById("salaryM").checked ? document.getElementById("salaryM").value : "";
    let salaryK = document.getElementById("salaryK").checked ? document.getElementById("salaryK").value : "";
    let site = document.getElementById("constructionSite").value;
    let salaryText = salary ? `Salary: $${salary}${salaryK}${salaryM}` : "Salary: Negotiable";

    let output = "";
    if (workType === "Hiring") {
        output = `Hiring ${workRole}`;
        if (site) output += ` at ${site}`;
        output += `. ${salaryText}`;
    } else {
        output = `${workRole} looking for work.`;
    }

    document.getElementById("finalOutput").value = output;
}

document.querySelectorAll("#workForm input, #workForm select").forEach(element => {
    element.addEventListener("change", generateWorkAd);
});

function toggleSalaryCheckbox(selectedId, otherId) {
    let selected = document.getElementById(selectedId);
    let other = document.getElementById(otherId);
    if (selected.checked) {
        other.checked = false;
    }
}
// The autoComplete.js Engine instance creator
const autoCompleteJS = new autoComplete({
    selector: "#autoName",
    placeHolder: "Search for auto...",
    data: {
        src: autoNames,
        cache: true,
    },
    resultsList: {
        element: (list, data) => {
            if (!data.results.length) {
                // Create "No Results" message element
                const message = document.createElement("div");
                // Add class to the created element
                message.setAttribute("class", "no_result");
                // Add message text content
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                // Append message element to the results list
                list.prepend(message);
            }
        },
        noResults: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            },
        },
    },
});
const otherComplete1 = new autoComplete({
    selector: "#otherItem1",
    placeHolder: "Search for other...",
    data: {
        src: otherNames,
        cache: true,
    },
    resultsList: {
        element: (list, data) => {
            if (!data.results.length) {
                const message = document.createElement("div");
                message.setAttribute("class", "no_result");
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                list.prepend(message);
            }
        },
        noResults: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                event.target.value = selection;
            },
        },
    },
});

const otherComplete2 = new autoComplete({
    selector: "#otherItem2",
    placeHolder: "Search for other...",
    data: {
        src: otherNames,
        cache: true,
    },
    resultsList: {
        element: (list, data) => {
            if (!data.results.length) {
                const message = document.createElement("div");
                message.setAttribute("class", "no_result");
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                list.prepend(message);
            }
        },
        noResults: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                event.target.value = selection;
            },
        },
    },
});

const otherComplete3 = new autoComplete({
    selector: "#otherItem3",
    placeHolder: "Search for other...",
    data: {
        src: otherNames,
        cache: true,
    },
    resultsList: {
        element: (list, data) => {
            if (!data.results.length) {
                const message = document.createElement("div");
                message.setAttribute("class", "no_result");
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                list.prepend(message);
            }
        },
        noResults: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                event.target.value = selection;
            },
        },
    },
});

document.addEventListener("DOMContentLoaded", function() {
    let businessSelect = document.getElementById("Businessname");
    const otherItem1 = document.getElementById("otherItem1");
    const otherItem2 = document.getElementById("otherItem2");
    const otherItem3 = document.getElementById("otherItem3");
    const otherPrice = document.getElementById("otherPrice");
    const otherPriceM = document.getElementById("otherPriceM"); // Million Checkbox
    const otherPriceK = document.getElementById("otherPriceK"); // K Checkbox
    const otherPriceE = document.getElementById("otherPriceE"); // Each Checkbox
    const purposeRadios = document.getElementsByName("otherPurpose");
    // Initially hide and disable otherItem2 & otherItem3
    otherItem2.style.display = "none";
    otherItem2.disabled = true;
    otherItem3.style.display = "none";
    otherItem3.disabled = true;

    function checkInputs() {
        if (otherItem1.value.trim() !== "") {
            otherItem2.style.display = "block";
            otherItem2.disabled = false;
        } else {
            otherItem2.style.display = "none";
            otherItem2.disabled = true;
            otherItem3.style.display = "none";
            otherItem3.disabled = true;
        }

        if (otherItem2.value.trim() !== "") {
            otherItem3.style.display = "block";
            otherItem3.disabled = false;
        } else {
            otherItem3.style.display = "none";
            otherItem3.disabled = true;
        }
    }

    otherItem1.addEventListener("input", checkInputs);
    otherItem2.addEventListener("input", checkInputs);

    if (typeof businessTypes !== "undefined") {
        businessTypes.forEach(function(business) {
            let option = document.createElement("option");
            option.value = business.replace(/\s+/g, " ");
            option.textContent = business;
            businessSelect.appendChild(option);
        });
    }

    const serviceDropdown = document.getElementById("otherServices");
    const locationSection = document.getElementById("locationSection");
    const finalOutput = document.getElementById("finalOutput");
    // **Purpose, Items, और Price को Initially Enable रखें**
    function enablePurposeItemsAndPrice() {
        purposeRadios.forEach(radio => {
            radio.disabled = false;
            radio.checked = false;
        });

        otherItem1.disabled = false;
        otherItem2.disabled = true;
        otherItem3.disabled = true;

        otherItem1.value = "";
        otherItem2.value = "";
        otherItem3.value = "";

        otherPrice.disabled = false;
        otherPrice.value = "";

        otherPriceM.disabled = false;
        otherPriceM.checked = false;

        otherPriceK.disabled = false;
        otherPriceK.checked = false;

        otherPriceE.disabled = false;
        otherPriceE.checked = false;
    }

    // **Event & Services Change होने पर Purpose, Items, और Price को Disable करें**
    function handleServiceChange() {
        const selectedService = serviceDropdown.value;
        const servicesWithLocation = ["party", "wedding"];

        if (selectedService) {
            // **Purpose Disable करें**
            purposeRadios.forEach(radio => {
                radio.disabled = true;
                radio.checked = false;
            });

            // **Items Disable और Blank करें**
            otherItem1.disabled = true;
            otherItem2.disabled = true;
            otherItem3.disabled = true;

            otherItem1.value = "";
            otherItem2.value = "";
            otherItem3.value = "";

            // **Price & Negotiable को Disable और Blank करें**
            otherPrice.disabled = true;
            otherPrice.value = "";

            otherPriceM.disabled = true;
            otherPriceM.checked = false;

            otherPriceK.disabled = true;
            otherPriceK.checked = false;

            otherPriceE.disabled = true;
            otherPriceE.checked = false;
        } else {
            enablePurposeItemsAndPrice();
        }

        // **Location Section Visibility Toggle**
        if (servicesWithLocation.includes(selectedService)) {
            locationSection.style.display = "block"; // Show location selection
        } else {
            locationSection.style.display = "none"; // Hide location selection
        }

        updateFinalOutput();
    }

    // **Event Listener: जब Service सेलेक्ट हो**
    serviceDropdown.addEventListener("change", handleServiceChange);

    // **जब कोई Location सेलेक्ट हो तो Final Output अपडेट करें**
    document.querySelectorAll('input[name="eventLocation"]').forEach(checkbox => {
        checkbox.addEventListener("change", updateFinalOutput);
    });

    // **पेज लोड पर Reset करें**
    enablePurposeItemsAndPrice();

    function updateFinalOutput() {
        const selectedService = serviceDropdown.value;
        const selectedLocation = document.querySelector('input[name="eventLocation"]:checked');

        // **जब भी लोकेशन बदले, पहले finalOutput को खाली करें**
        if (selectedLocation) {
            finalOutput.value = "";
        }

        if (selectedService) {
            finalOutput.value = selectedService; // सिर्फ सर्विस का नाम दिखाएं

            // अगर लोकेशन चुनी गई है तो उसे जोड़ें
            if (selectedLocation) {
                finalOutput.value += " at " + selectedLocation.value;
            }
        }
    }

    // Event Listener: जब Service सेलेक्ट हो
    serviceDropdown.addEventListener("change", function() {
        const selectedService = serviceDropdown.value;
        const servicesWithLocation = ["party", "wedding"];

        if (servicesWithLocation.includes(selectedService)) {
            locationSection.style.display = "block"; // Show location selection
        } else {
            locationSection.style.display = "none"; // Hide location selection
        }

        updateFinalOutput();
    });

    // Event Listener: जब Location सेलेक्ट हो
    document.querySelectorAll('input[name="eventLocation"]').forEach(radio => {
        radio.addEventListener("change", function() {
            finalOutput.value = ""; // **लोकेशन बदलते ही पहले आउटपुट क्लियर करें**
            updateFinalOutput();
        });
    });

});