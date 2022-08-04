<template>
  <div class="no-conversation-selected empty-state">
    <div>
        <p class="tit">Your messages</p>
        <p class="txt">사진과 메시지를 상대방에게 보냅니다.</p>
        <p class="send-icon"><span><i class="fa-solid fa-paper-plane"></i></span></p>
    </div>
    <button class="send-btn">
        <span>메시지 보내기</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MessagesEmptyState',
}
</script>

<style>
  .empty-state{padding:20px 10px;text-align:center;}
  .empty-state .tit{margin:8px 0;margin-top:12px;font-size:1.4rem;font-weight:600;color:#333;}
  .empty-state .txt{margin:6px 0;margin-bottom:24px;font-size: 0.875rem;color:#666;}
  .empty-state .send-icon{position:relative;display:inline-block;width:120px;height:120px;border:1.5px solid #666;border-radius:100%;}
  .empty-state .send-icon span{position:absolute;top:15px;left:26px;font-size:5.0rem;color:#666;}
  .empty-state .send-btn{margin-top:20px}
  .empty-state .send-btn span{display:inline-block;padding:0 15px;min-width:48px;height:30px;line-height:30px;color:#fff;font-weight:600;border-radius:5px;box-sizing:border-box;background-color:var(--blue-text);}
</style>