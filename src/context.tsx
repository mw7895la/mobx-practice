import React from 'react';
import {useLocalStore} from 'mobx-react-lite';
import { createStore, TStore} from './store';

//storeProvider FC에 useLocalStore를 사용했습니다.
// useLocalStore는 훅에서 mobx를 사용할 수 있게 해주며
// contextAPI와 함께 어느 함수 컴포넌트에서라도
//내가 필요한 스토어를 사용할 수 있습니다

//context와 provider를 생성하고 export
//context에서는 사용할 store를 불러온다.

export const storeContext = React.createContext<TStore | null>(null);

export const StoreProvider: React.FC =({children}) =>{
    const store = useLocalStore(createStore);

    return (
        //불러온 store를 provider에 넣어준다.
        <storeContext.Provider value={store}>
            {children}
        </storeContext.Provider>
    );
};

export default StoreProvider;