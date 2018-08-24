<template>
    <main>
        <section>
            <div class="litte-video">
                <ul>                    
                    <li v-for="i in 3">
                        <div class="bgimg"></div>
                        <video width="100%" height=""  name="media"  poster="../../assets/images/vedioimg.jpg">
                            <source src="http://vjs.zencdn.net/v/oceans.mp4"   type="video/mp4">
                        </video>
                        <h6>没有视频接口难受{{i}}</h6>
                        <p>作者&nbsp;&nbsp;&nbsp;&nbsp;时间</p>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>

    export default{
        data(){
            return{
               list:3
            }
        },
        mounted(){
            $('.litte-video>ul li').click(function(event) {
                $(this).children('video').attr('controls','true');
                $(this).siblings().children('video').removeAttr('controls');
                $(this).siblings().children('video').trigger('pause');
            });

        }
    }
</script>

<style scoped="">
.litte-video{
    width:100%;
}
.litte-video ul{
    width:100%;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
}

.litte-video ul li{
    width:100%;
    padding: 20px 10px 10px 10px;
    box-sizing:border-box;
    border:1px solid white;
    border-bottom: 1px solid #ddd;
}

.litte-video ul li:nth-of-type(1){
    padding-top: 50px;
}
.litte-video ul li h6{
    font-size: 15px;
    color: #222;
    margin-left: 10px;

}
.litte-video ul li p{
    font-size: 12px;
    color: #666;
    margin-left: 10px;
}
</style>