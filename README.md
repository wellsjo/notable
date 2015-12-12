# notable
Leave notes for yourself in the terminal!

`no <message>` saves that message and associates it with the directory you're in.  Then when you type `no` again, it shows the message.  You can overwrite it, or call `no clear` to remove it.

## Example
```
>no
nothing here

>no hello world!
note saved

>no
hello world!

>no clear
note removed

>no
nothing here
```


## Install
```bash
npm install notable -g
```

## License
MIT
