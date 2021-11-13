const customers =  
    [
        'a1',
        'b2',
        'c3',
        'd4',
        'e5'
    ]
export default customers;


export const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
    },
    {
        name: 'Surname',
        selector: row => row.surname,
    },
];