import { useState } from "react";
import { useRouter } from "next/router";
//load stripe
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";


const Donation = () => {
    const [amount, setAmount] = useState(5);
    const { push } = useRouter();
    const [paymentSubmit, setPaymentSubmit] = useState(false)


    const defaultAmounts = [10, 20, 80, 100];
    const createCheckOutSession = async () => {
        setPaymentSubmit(true)
        const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
        const stripe = await stripePromise;
        const checkoutSession = await axios.post("/api/prepareStripePayment", {
            amount: amount,
        });

        const result = await stripe?.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result?.error) {
            alert(result?.error.message);
        }
    };


    return (

        <div className="lg:space-x-5 bg-slate-600 min-h-screen  lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col text-left lg:text-left">
            <div className="mr-5">
                <h1 className="text-2xl  lg:text-5xl">
                    Give
                </h1>
                <p className="mt-6">
                    The ministry at Corner Church is supported entirely by the generous giving of our friends, members and regular attenders. Thank you for your faithfulness and support. Outside of our Sunday service, here are a few ways to give…
                </p>
                <h2 className="text-xl pt-5 font-bold">Credit Card Giving</h2>
                <p className="mt-5">
                    It’s safe, simple and secure. It’s also the easiest way to give. By choosing this option, you can use your credit/debit card.
                </p>
                <p className="mt-5">
                    For custom giving amounts, type in dollar amount or use the arrows on the side.
                </p>
                <p className="mt-5">
                    After clicking the Stripe button you will be taken to Stripe, (a third party site) to process the donation securely.
                </p>
                <h2 className="text-xl mt-5 font-bold">Mail it in</h2>
                <p className="mt-5">Checks made payable to “Corner Church”, can be sent to the following address:</p>
                <div className="mt-5">Corner Church</div>
                <div>123 Main Street</div>
                <div>Bluffton, SC 55555</div>
                <p className="mt-5">All donations are tax deductible.</p>
            </div>


            {paymentSubmit && paymentSubmit == true ? (
                <>
                    <div className=" border-blue-300 max-h-80 w-98  shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-700 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded"></div>
                                    <div className="flex justify-center text-xl pt-5">

                                        Loading...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : (

                <div
                    className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                    <div
                        className="w-98 max-h-80 flex-col items-center z-10 space-y-5 rounded-md  bg-color-navy p-10">
                        <div
                            className="group flex w-full items-center rounded-lg bg-gray-100/30 text-white focus:outline-none">
                            <p className="rounded-l-lg bg-gray-400 px-4 py-3 text-lg text-black">
                                USD
                            </p>
                            <input
                                type="number"
                                className="w-full rounded-lg bg-transparent px-4 py-3 text-gray-300  transition duration-200 focus:outline-none group-hover:opacity-100"
                                placeholder="Enter Amount"
                                value={amount ? amount : ""}
                                onChange={(e) => setAmount(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="flex items-center space-x-2 dark:text-black">
                            {defaultAmounts.map((buttonAmount) => (
                                <button
                                    className={`${amount === buttonAmount ? "bg-cyan-500 border-cyan-500" : "bg-gray-300"
                                        + " border-4 border-gray-300 hover:border-4 hover:border-cyan-500"
                                        } border-4 border-gray-300 rounded-full px-5 py-2 transition duration-200`}
                                    onClick={() => setAmount(buttonAmount)}
                                    key={buttonAmount}
                                >
                                    {buttonAmount}$
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={createCheckOutSession}
                            className="w-full rounded-lg border-cyan-500 border-2 hover:border-2 bg-cyan-500 py-3 text-xl font-bold hover:bg-cyan-600 hover:border-cyan-600">
                            <span className="">Stripe</span>
                        </button>

                    </div>
                </div>
            )}
        </div>

    )
}

export default Donation