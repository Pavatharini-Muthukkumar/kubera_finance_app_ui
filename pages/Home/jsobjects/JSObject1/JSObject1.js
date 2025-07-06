export default {
  initDashboard: async () => {
    await GetMonths.run();
    await GetCategoryExpenses.run();
    //await GetSubcategoryExpenses.run();
		{{ storeValue('selectedMonth', GetMonths.data[0]?.Month) }}
  }
}
