type OptionsFlags<T> = {
    [Key in keyof T]: boolean
 };

 interface ISomeLog {
    isImplemented: boolean;
    isShutdown: string;
 }

 type ISomeLogB = OptionsFlags<ISomeLog>;