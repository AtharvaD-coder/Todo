// export const saveState = (state) => {
//     try {
//        const serializedState = JSON.stringify(state);
//        localStorage.setItem('todoAppState', serializedState);
//     } catch {
//     }
//    };
   
//    export const loadState = () => {
//     try {
//        const serializedState = localStorage.getItem('todoAppState');
//        if (serializedState === null) {
//          return undefined;
//        }
//        return JSON.parse(serializedState);
//     } catch (error) {
//        return undefined;
//     }
//    };
   