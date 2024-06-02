import { useSelector, useDispatch } from "react-redux";
import { setBillingCycle, setPageViews, setPricePerMonth} from "../features/card/appSlice";
import {CheckMark} from "./Svg";

export const Card = () => {
  const dispatch = useDispatch();
  const { pageViews, pricePerMonth, billingCycle, discount, basePricePerMonth } = useSelector(
    (state) => state.app
  );

  const handleBillingCycleChange = (e) => {
    const cycle = e.target.checked ? "yearly" : "monthly";
    dispatch(setBillingCycle(cycle));
	handlePricePerMonthChangeCycle(cycle);
  };

  const handlePageViewsChange = (e) => {
	e.preventDefault();
    const views = parseInt(e.target.value, 10);
    dispatch(setPageViews(views));
	handlePricePerMonthChange(views);
  };

  const handlePricePerMonthChange = (e) =>{
	const views = e || pageViews;
	const price = (billingCycle === "yearly")
      ? (basePricePerMonth * 12 * (views/10000) * (1 - discount))
      : basePricePerMonth * (views/10000);
	dispatch(setPricePerMonth(price));	
  };

  const handlePricePerMonthChangeCycle = (cycle) =>{
	const price = (cycle === "yearly")
      ? (basePricePerMonth * 12 * (pageViews/10000) * (1 - discount))
      : basePricePerMonth * (pageViews/10000);
	dispatch(setPricePerMonth(price));	
  };

  return (
    <div>
      <div className="lg:w-[475px] min-w-[350px] min-h-[350px] border-1 border-black rounded-lg shadow-xl bg-white dark:bg-slate-800">
        <div className="flex justify-between pt-10 mx-4 lg:justify-around">
          <span className="text-slate-500 text-[13px] font-semibold mt-2 ml-1 tracking-widest lg:text-lg dark:text-white">
            {pageViews / 1000}k PAGEVIEWS
          </span>
          <h3 className="text-3xl font-bold dark:text-white">
			${pricePerMonth.toFixed(2)}
            <span className="text-sm text-gray-400 font-medium">
              / {billingCycle}
            </span>
          </h3>
        </div>
        <div className="relative m-8 flex items-center">
          <input
            type="range"
            min={10000}
            max={500000}
            step={10000}
            value={pageViews}
            onChange={handlePageViewsChange}
            className="range-slider w-full h-[6px] rounded-lg cursor-pointer appearance-none bg-teal-200 lg:w-11/12 lg:ml-5 dark:bg-slate-400"
          />
        </div>
		<div className="flex justify-center">
			<span className="text-[12px] font-medium text-slate-500 mr-4 dark:text-slate-300">Monthly Billing</span>
			<label className="inline-flex items-center cursor-pointer">
				<input type="checkbox" className="sr-only peer" checked = {billingCycle === "yearly"} onChange = {handleBillingCycleChange} />
				<div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-200 dark:peer-checked:bg-slate-400"></div>
			</label>
			<span className="text-[12px] font-medium text-slate-500 ml-4 dark:text-slate-300">Yearly Billing</span>
			<span className="text-[9px] ml-2 p-1 rounded-lg bg-[#feece7] text-[#ff8c66] dark:bg-slate-600 dark:text-white">25% discount</span>
		</div>
		<div className="h-[1px] bg-slate-200 mt-8"></div>
		<div className="mt-8 flex justify-between">
			<div className="flex flex-col justify-center ml-4">
				<div className="flex">
					<div className="mt-1">
						<CheckMark/>
					</div>
					<span className="text-[12px] font-medium text-slate-500 mr-4 ml-2 mb-2 dark:text-slate-300">Unlimited websites</span>
				</div>
				<div className="flex">
					<div className="mt-1">
						<CheckMark/>
					</div>
					<span className="text-[12px] font-medium text-slate-500 mr-4 ml-2 mb-2 dark:text-slate-300">100% data ownership</span>
				</div>
				<div className="flex">
					<div className="mt-1">
						<CheckMark/>
					</div>
					<span className="text-[12px] font-medium text-slate-500 mr-4 ml-2 mb-2 dark:text-slate-300">Email reports</span>
				</div>
			</div>
			<button className="rounded-3xl bg-blue-950 text-white my-5 text-[13px] w-[45%] font-medium mr-2 cursor-pointer lg:mr-8 lg:w-1/3 dark:bg-slate-400 dark:text-white">
				Start my trial
			</button>
		</div>
      </div>
    </div>
  );
};
