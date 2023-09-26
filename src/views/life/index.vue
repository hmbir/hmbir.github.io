<template>
    <div class="index">
        <div class="header">
            <div @click="topath('book')">阅读</div>
            <div @click="topath('anime')">动漫</div>
            <div @click="topath('movie')">电影</div>
            <div @click="topath('game')">游戏</div>
        </div>
        <div class="content" v-show="isbook">
            <div class="cont_wrapper" v-for="item in book" :key="item.key" v-show="item.imgSrc">
                <img class="vertical" :src="item.imgSrc" alt="">
                <div class="cont-title">{{ item.title }} </div>
            </div>
        </div>
        <div class="content" v-show="isanime">
            <div class="cont_wrapper" v-for="item in anime" :key="item.key" v-show="item.imgSrc">
                <img class="vertical" :src="item.imgSrc" alt="">
                <div class="cont-title">{{ item.title }} </div>
            </div>
        </div>
        <div class="content" v-show="ismovie">
            <div class="cont_wrapper" v-for="item in movie" :key="item.key" v-show="item.imgSrc">
                <img class="vertical" :src="item.imgSrc" alt="">
                <div class="cont-title">{{ item.title }} </div>
            </div>
        </div>
        <div class="content_game" v-show="isgame">
            <h3>主机</h3>
            <div>
                <h4>{{game.host.fc.name}}</h4>
                <div class="game_wrapper">
                    <div class="game_cont" v-for="item in game.host.fc.data" :key="item.key" v-show="item.imgSrc">
                        <img :src="item.imgSrc" alt="" class="level">
                        <div class="cont-title">{{ item.title }} </div>
                    </div>
                </div>
                <h4>{{game.host.gba.name}}</h4>
                <div class="game_wrapper">
                    <div class="game_cont" v-for="item in game.host.gba.data" :key="item.key" v-show="item.imgSrc">
                        <img :src="item.imgSrc" alt="" class="level">
                        <div class="cont-title">{{ item.title }} </div>
                    </div>
                </div>
                <h4>{{game.host.psp.name}}</h4>
                <div class="game_wrapper">
                    <div class="game_cont" v-for="item in game.host.psp.data" :key="item.key" v-show="item.imgSrc">
                        <img :src="item.imgSrc" alt="" class="level">
                        <div class="cont-title">{{ item.title }} </div>
                    </div>
                </div>
            </div>
            <h3>电脑</h3>
            <div>
                <h4>{{game.pc.web.name}}</h4>
                <div class="game_wrapper">
                    <div class="game_cont" v-for="item in game.pc.web.data" :key="item.key" v-show="item.imgSrc">
                        <img :src="item.imgSrc" alt="" class="level">
                        <div class="cont-title">{{ item.title }} </div>
                    </div>
                </div>
                <h4>{{game.pc.end.name}}</h4>
                <div class="game_wrapper">
                    <div class="game_cont" v-for="item in game.pc.end.data" :key="item.key" v-show="item.imgSrc">
                        <img :src="item.imgSrc" alt="" class="level">
                        <div class="cont-title">{{ item.title }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { book } from "./data.json";
import { anime } from "./data.json";
import { movie } from "./data.json";
import { game } from "./data.json";
export default {
    name: "life",
    data() {
        return {
            book: [],
            anime: [],
            movie: [],
            game: {
                host: {
                    fc: {},
                    gba: {},
                    psp: {},
                },
                pc: {
                    web: {},
                    end: {},
                },
            },
            isbook: false,
            isanime: false,
            ismovie: false,
            isgame: false,
        };
    },
    methods: {
        topath(path) {
            switch (path) {
                case "book":
                    this.isbook = true;
                    this.isanime = this.ismovie = this.isgame = false;
                    break;
                case "anime":
                    this.isanime = true;
                    this.isbook = this.ismovie = this.isgame = false;
                    break;
                case "movie":
                    this.ismovie = true;
                    this.isbook = this.isanime = this.isgame = false;
                    break;
                case "game":
                    this.isgame = true;
                    this.isbook = this.isanime = this.ismovie = false;
                    break;
            }
        },
    },
    mounted() {
        this.book = book;
        this.movie = movie;
        this.anime = anime;
        this.game = game;
    },
};
</script>
    
<style lang="less" scoped>
* {
    padding: 0;
    margin: 0;
}
.index {
    .header {
        max-width: 300px;
        margin: 50px auto 0;
        display: flex;
        justify-content: space-around;
        div {
            cursor: pointer;
        }
        div:hover {
            color: pink;
        }
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        .cont_wrapper {
            padding: 5px 15px 25px;
            .vertical {
                width: 160px;
                height: 200px;
            }
            img {
                width: 100%;
                height: 100% !important;
                display: block;
            }
            .cont-title {
                color: pink;
                text-align: center;
            }
        }
    }
    .content_game {
        .game_wrapper {
            display: flex;
            flex-wrap: wrap;
            .game_cont {
                padding: 5px 15px 25px;
                width: 250px;
                height: 160px;
                box-sizing: border-box;
                img {
                    width: 100%;
                    height: 100% !important;
                    display: block;
                }
                .cont-title {
                    color: pink;
                    text-align: center;
                }
            }
        }
    }
}
</style>