let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It`s my first post', likesCount: 11 },
            { id: 3, message: 'Hi, how are you?' },
        ]        
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],
        messages: [
            { id: 1, dialogId: 1, message: 'Hi', type: "self", date: '13 сентября', time: '11:10' },
            { id: 2, dialogId: 1, message: 'How is your it-kamasutra?', type: "friend", date: '15 сентября', time: '11:11' },
            { id: 3, dialogId: 1, message: 'Yo', type: "self", date: '15 сентября', time: '11:11' },

            { id: 1, dialogId: 2, message: 'Hi', type: "self", date: '15 сентября', time: '14:23' },
            { id: 2, dialogId: 2, message: 'Hello, we a gonna vizit New Your this weekend', type: "friend", date: '15 сентября', time: '14:23' },
            { id: 3, dialogId: 2, message: 'Oh, you kidding? Can i join you?', type: "self", date: '15 сентября', time: '14:24' },
            { id: 4, dialogId: 2, message: 'Oh wait, i`ll ask to mom', type: "friend", date: '15 сентября', time: '14:24' },
            { id: 5, dialogId: 2, message: 'Yes, why not. You should go to my home tomorrow at 8:00', type: "friend", date: '15 сентября', time: '14:25' },
            { id: 6, dialogId: 2, message: 'YEEEEAAAH. Thx, Sveta, i`ll tried to not prospatb', type: "self", date: '15 сентября', time: '14:25' },
            
            { id: 1, dialogId: 3, message: 'Hola!', type: "friend", date: '15 сентября', time: '11:10' },
            { id: 2, dialogId: 3, message: 'Hey. Leave me alone please. I learn my IT-Kamasutra!', type: "self", date: '15 сентября', time: '11:10' },
            { id: 3, dialogId: 3, message: 'Bro, мы договаривались пойти погонять в баскет', type: "friend", date: '15 сентября', time: '11:10' },
            { id: 4, dialogId: 3, message: 'Шутишь? Какая камасутра, ты из этих?', type: "friend", date: '15 сентября', time: '11:10' },
            { id: 5, dialogId: 3, message: 'Нет! Я не пойду играть в баскетбол. я выучу реакт и буду зарабатывать миллионы понял?', type: "self", date: '15 сентября', time: '11:10' },
            { id: 6, dialogId: 3, message: 'Встретимся, когда ты будешь играть на поле, построенном моей компанией.', type: "self", date: '15 сентября', time: '11:10' },
            { id: 7, dialogId: 3, message: 'Как реакт связан со строительством баскетбольного поля?', type: "friend", date: '15 сентября', time: '11:10' },
            { id: 8, dialogId: 3, message: '... Не важно. Может в дотку?', type: "self", date: '15 сентября', time: '11:10' },
            { id: 9, dialogId: 3, message: 'Го, снова будешь миссать кнопки на пятерке?', type: "friend", date: '15 сентября', time: '11:10' },
            { id: 10, dialogId: 3, message: 'Начнем сеанс.', type: "self", date: '15 сентября', time: '11:10' }
        ]
    }
}

export default state;