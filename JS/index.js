const selected = [];

// Seat Select
function ticket(event) {
    if (!selected.includes(event.target.innerText)) {
        if (selected.length < 4) {
            selected.push(event.target.innerText);
            document.getElementById('seatCount').innerText = selected.length;
            document.getElementById('availableSeat').innerText = 40 - selected.length;
            event.target.classList.add('bg-themePrimary', 'text-white');
            document.getElementById('warning').classList.add('hidden');
            document.getElementById('dynamicDiv').innerHTML += `
            <div class="flex justify-between items-center">
                <p class="font-medium text-base text-headingText">${event.target.innerText}</p>
                <p class="font-medium text-base text-headingText">Economy</p>
                <p class="font-medium text-base text-headingText">550</p>
            </div>
            `;

            // Total Price
            let totalPrice = 550 * selected.length;
            document.getElementById('totalPrice').innerText = totalPrice;

            // Coupon field Enable
            if (selected.length === 4) {
                document.getElementById('couponCode').removeAttribute('disabled')
                document.getElementById('applyBtn').removeAttribute('disabled')
            }
            // Enable Next
            if (selected.length > 0) {
                document.getElementById('next').removeAttribute('disabled');
            }
        } else {
            return alert('You Can Book 4 Seat Maximum');
        }

    } else {
        return alert('Your booked this already');
    }
}

// Coupon Apply
document.getElementById('applyBtn').addEventListener('click', function () {
    const couponCodeValue = document.getElementById('couponCode').value;
    const totalPrice = Number(document.getElementById('totalPrice').innerText);
    const discount15 = totalPrice * .15;
    const discount20 = totalPrice * .20;
    if (couponCodeValue === 'NEW15') {
        const finalDiscount = totalPrice - discount15;
        document.getElementById('gradTotal').innerText = finalDiscount;
        document.getElementById('couponCode').value = '';
    } else if (couponCodeValue === 'Couple 20') {
        const finalDiscount = totalPrice - discount20;
        document.getElementById('gradTotal').innerText = finalDiscount;
        document.getElementById('couponCode').value = '';
    } else {
        return alert('Invalid Coupon');
    }

})

// Next Btn
document.getElementById('next').addEventListener('click', function (event) {
    event.preventDefault();
})



