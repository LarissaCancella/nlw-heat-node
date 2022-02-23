import { serverHttp } from "./app";

serverHttp.listen(4000, () => console.log(`:rocket server is running on PORT 4000`));