

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        id: '1',
        type: 'default',
        data: {
            sex: 'female',
            birthdayDate: '28.12.1953',
            name: 'Валерия',
            surName: 'Иванова',
            secondName:'Петровна',
            
            label: 1,
        },
        position: { x: 100, y: 50 },
        isHidden: false
    },
    {
        id: '2',
        type: 'default',
        data: {
            sex: 'male',
            birthdayDate: '26.02.1951',
            name: 'Федор',
            surName: 'Кондаков',
            secondName:'Павлович',
            label: 2,
        },
        position: { x: 300, y: 50 },
    },
    {
        id: '3',
        type: 'default',
        data: {
            sex: 'female',
            birthdayDate: '21.09.1948',
            name: 'Мария',
            surName: 'Петрова',
            secondName:'Николаевна',
            label: 3
        },
        position: { x: 500, y: 50 },
    },
    {
        id: '4',
        type: 'default',
        position: { x: 700, y: 50 },
        data: {
            sex: 'male',
            birthdayDate: '13.05.1949',
            name: 'Максим',
            surName: 'Русаков',
            secondName:'Алексеевич',
            label: 4,
        },
    },
    {
        id: '5',
        type: 'default',
        data: {
            sex: 'female',
            birthdayDate: '15.08.1978',
            name: 'Маргорита',
            surName: 'Кондакова',
            secondName:'Федоровна',
            label: 5,
        },
        position: { x: 190, y: 250 },
    },
    {
        id: '6',
        type: 'default',
        data: {
            sex: 'male',
            birthdayDate: '02.03.1972',
            name: 'Дмитрий',
            surName: 'Русаков',
            secondName:'Максимович',
            label: 6
        },
        position: { x: 600, y: 250 },
    },
    {
        id: '7',
        type: 'default',
        data: {
            sex: 'female',
            birthdayDate: '09.01.2000',
            name: 'Алина',
            surName: 'Русакова',
            secondName:'Дмитриевна',
            label: 7
        },
        position: { x: 370, y: 450 },
    },
    { id: 'e1-5', source: '1', target: '5', type: 'smoothstep' },
    { id: 'e2-5', source: '2', target: '5', type: 'smoothstep' },
    {
        id: 'e3-6',
        source: '3',
        target: '6',
        type: 'smoothstep'
    },
    {
        id: 'e4-6',
        source: '4',
        target: '6',
        type: 'smoothstep'
    },
    {
        id: 'e5-7',
        source: '5',
        target: '7',
        type: 'smoothstep'
    },
    {
        id: 'e6-7',
        source: '6',
        target: '7',
        type: 'smoothstep'
    },
];