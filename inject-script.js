var numOfClicks = document.documentElement.querySelectorAll('[formcontrolid="fc_1d2c3c8e8556462fb5107b35b9785e23"] .ntx-repeating-section-repeated-section').length - 1;

for (var i = 0, j = numOfClicks; i < j; i++) {
     document.documentElement.querySelector('[formcontrolid="fc_f7edea3c7bbc474ba19424f8e5269e62"] .btn-repeating-section-new-row').click();
}

var readOnlyTextShort = document.documentElement.querySelectorAll('[formcontrolid="fc_1d2c3c8e8556462fb5107b35b9785e23"] input:not([type="checkbox"])');

readOnlyTextShort.forEach(function (input) {
     document.documentElement.querySelector(`[formcontrolid="fc_f7edea3c7bbc474ba19424f8e5269e62"] [aria-label="${input.ariaLabel}"]`).value = input.value;
});
