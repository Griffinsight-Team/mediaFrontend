import { RecentActors } from "@mui/icons-material";
import axios from "axios";

export const PATHS = {
    BASE:'https://akramb19215.pythonanywhere.com',
    ARTICLE: 'https://akramb19215.pythonanywhere.com/article/',
    ART:(id)=> 'https://akramb19215.pythonanywhere.com/article/'+id+'/',
    NEWSLETTER:'https://akramb19215.pythonanywhere.com/newsletter/',
    SEARCH: (id) => 'https://akramb19215.pythonanywhere.com/search/'+ id+'/',
    RECENT: 'https://akramb19215.pythonanywhere.com/article/recent',
    COMMENT: (id) => 'https://akramb19215.pythonanywhere.com/comment/'+ id+'/',
    COMMENTPOST:  'https://akramb19215.pythonanywhere.com/comment/',
    ACADEMICS:'https://akramb19215.pythonanywhere.com/article/academics',
    INSTILIFE:'https://akramb19215.pythonanywhere.com/article/instilife',
    SPOTLIGHT:'https://akramb19215.pythonanywhere.com/article/spotlight',
    SCITECH:'https://akramb19215.pythonanywhere.com/article/scitech',
    OPINION:'https://akramb19215.pythonanywhere.com/article/opinion',
    WATCH:'https://akramb19215.pythonanywhere.com/spotlight/',
    PINNED:'https://akramb19215.pythonanywhere.com/pinnned/',
    PINNEDLIST:'https://akramb19215.pythonanywhere.com/pinned/'
}

export const API = {

    GET: (url, body = {}, params = {}, cb) => {
        axios.get(url, {
            data: body,
            params: params
        }).then(res => {
            cb(res.data);
        }).catch(error => {
            console.error("ERROR:", error);
            cb(null);
        })
    },
    POST: (url, body = {}, params = {}, cb) => {
        axios.post(url,
            body, {
            params: params
        }).then(res => {
            cb(res.data);
        }).catch(err => {
            console.log("ERROR: ", err);
            cb(null);
        })
    },
    PATCH: (url, body = {}, params = {}, cb) => {
        axios.patch(url,
            body, {
            params: params
        }).then(res => {
            cb(res.data);
        }).catch(err => {
            console.log("ERROR: ", err);
            cb(null);
        })
    },
    DELETE: (url, body = {}, cb) => {
        axios.delete(url, {
            data: body
        }).then(res => {
            cb(res);
        }).catch(err => {
            console.error("ERROR: ", err);
            cb(null);
        })
    },
    
    
}

