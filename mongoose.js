import connect from "./connect/connect.js";
import User from "./schemas/user.js";

// 더미 데이터 넣기용
connect()

const user_inserted = await User.create(
    {
        email : "test123@gmail.com",
        name : "이상원",
        age : 20,
    },
    {
        email : "test987@gmail.com",
        name : "홍길동",
        age : 30,
    },
)

const users = await User.find();
console.log(users);