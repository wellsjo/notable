# notable
Leave notes for yourself in the terminal!

`no <message>` associates `message` with the directory you're in, so when you come back to the directory, you can read it again by typing `no`. To clear the message associated with that directory, type `no clear`.  To clear everything, type `no clear all`.

## Install
```bash
npm install notable -g
```

## Example
```
>no
nothing here

>no hello world!
note saved

>no
Sat, Dec 12 2015 01:34:32
hello world!

>no clear
note removed

>no
nothing here
```

## License
MIT
