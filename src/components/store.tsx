import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
name: string;
age: number;
}

const user = createSlice({
name: "user",
initialState: { name: "Crystal", age: 27 } as UserState,
reducers: {
    changeName(state) {
    state.name = "PAX";
    },
    increase(state, action: PayloadAction<number>) {
    state.age += action.payload;
    },
},
});

export const { changeName, increase } = user.actions;

interface CartItem {
id: number;
imgurl: string;
name: string;
count: number;
}

const cart = createSlice({
name: "cart",
initialState: [
    { id: 1, imgurl: "..//img/sub_page/SubImgDetail/001/detail01.jpg", name: "우먼 숏 리버시블 다운 베스트 라벤더", count: 2 },
    { id: 2, imgurl: "..//img/sub_page/SubImgDetail/002/detail01.jpg", name: "우먼 RDS 씨빅 숏 푸퍼 버터", count: 1 },
    { id: 3, imgurl: "..//img/sub_page/SubImgDetail/003/detail01.jpg", name: "우먼 숏 더플 코트 라이트 그레이", count: 1 },
] as CartItem[],
reducers: {
    addCount(state, action: PayloadAction<number>) {
    let num = state.findIndex((a) => {
        return a.id === action.payload;
    });
    console.log(num);
    state[num].count++;
    },
    decreaseCount(state, action: PayloadAction<number>) {
    let num = state.findIndex((a) => {
        return a.id === action.payload;
    });
    console.log(num);
    if (state[num].count > 0) {
        state[num].count--;
    } else if (state[num].count === 0) {
        alert("상품이 없습니다.");
    }
    },
    addItem(state, action: PayloadAction<CartItem>) {
    let num = state.findIndex((a) => a.id === action.payload.id);
    if (num !== -1) {
        state[num].count++;
    } else {
        state.push(action.payload);
    }
    },
    deleteItem(state, action: PayloadAction<number>) {
    let num = state.findIndex((a) => {
        return a.id === action.payload;
    });
    state.splice(num, 1);
    },
    sortName(state, action) {
    state.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
},
});

export const { addCount, decreaseCount, addItem, deleteItem, sortName } =
cart.actions;
export default configureStore({
reducer: {
    user: user.reducer,
    cart: cart.reducer,
},
});
