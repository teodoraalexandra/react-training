import create from 'zustand';

import { logger } from './middleware';

const initialState = {
  data: [],
  paginatedData: [],
  currentPage: 1,
  maxPage: 1,
  itemsPerPage: 1,
  startPage: 1,
  beginItem: 0,
  endItem: 0,
  countItems: 0,
};

const store = (set:any, get:any) => ({
  ...initialState,

  reset: () => set({ ...initialState }),

  sendNewSlice: (options:any):void => {
    const { init, currentPage } = options;

    const data = init ? options.data : get().data;
    const itemsPerPage = init ? options.itemsPerPage : get().itemsPerPage;
    const maxPage = init ? Math.ceil(data.length / itemsPerPage) : get().maxPage;
    const countItems = init ? data.length : get().countItems;
    const startPage = init ? options.currentPage : get().startPage;

    // data borders
    const beginItem = (currentPage - 1) * itemsPerPage;
    let endItem = beginItem + itemsPerPage;

    // new data slice
    const paginatedData = data.slice(beginItem, endItem);

    // end cannot higher than array length
    endItem = endItem > data.length ? data.length : endItem;

    // update state
    set({
      data,
      paginatedData,
      itemsPerPage,
      startPage,
      currentPage,
      maxPage,
      countItems,
      beginItem,
      endItem
    });
  },

  init: (data:any, itemsPerPage = 1, currentPage = 1) => {
    if (!data) return;

    get().sendNewSlice({
      data, itemsPerPage, currentPage, init: true
    });
  },

  jump: (page:number) => {
    let currentPage = page;
    if (currentPage > get().maxPage) currentPage = get().maxPage;
    if (currentPage < 1) currentPage = 1;

    get().sendNewSlice({ currentPage });
  },

  first: () => get().sendNewSlice({ currentPage: 1 }),
  last: () => get().sendNewSlice({ currentPage: get().maxPage }),
  next: () => get().sendNewSlice({ currentPage: Math.min(get().currentPage + 1, get().maxPage) }),
  prev: () => get().sendNewSlice({ currentPage: Math.max(get().currentPage - 1, 1) }),

});

const usePaginationStore = create(logger(store));
export default usePaginationStore;
