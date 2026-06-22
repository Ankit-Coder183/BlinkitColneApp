function Payment() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6 my-8">
      <h2 className="text-2xl font-bold mb-5">Choose Payment Method</h2>

      <div className="space-y-4">
        <button className="w-full border p-4 rounded-lg text-left hover:bg-gray-50">
          💵 Cash on Delivery
        </button>

        <button className="w-full border p-4 rounded-lg text-left hover:bg-gray-50">
          📱 UPI Payment
        </button>

        <button className="w-full border p-4 rounded-lg text-left hover:bg-gray-50">
          💳 Debit / Credit Card
        </button>

        <button className="w-full border p-4 rounded-lg text-left hover:bg-gray-50">
          🏦 Net Banking
        </button>
      </div>

      <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-bold">
        Proceed to Pay
      </button>
    </div>
  );
}

export default Payment;