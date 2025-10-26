function unlockBox(){
  var box = document.getElementById('unlockBox');
  box.style.display = 'block';
  box.scrollIntoView({behavior:'smooth'});
}

function copyWallet(){
  var addr = document.getElementById('walletAddress').textContent.trim();
  if(!addr || addr.includes('REPLACE_WITH')){
    alert('Please replace with your real TRC-20 USDT address.');
    return;
  }
  navigator.clipboard.writeText(addr).then(function(){
    var s = document.getElementById('copyStatus');
    s.style.display='block';
    setTimeout(()=> s.style.display='none',2200);
  },function(err){alert('Unable to copy.');});
}vfunction copyTelegram(){
  const username = '@Isaabelllaaa';
  // try navigator.clipboard first
  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(username).then(()=>{
      showCopyMsg();
    }, ()=>{ fallbackCopy(username); });
  } else {
    fallbackCopy(username);
  }
}

function fallbackCopy(text){
  // older fallback method
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showCopyMsg();
  } catch(e){
    alert('Copy failed — please copy @Isaabelllaaa manually.');
  } finally {
    ta.remove();
  }
}

function showCopyMsg(){
  const el = document.getElementById('tgCopyMsg');
  if(!el) return;
  el.style.opacity = 1;
  el.setAttribute('aria-hidden','false');
  setTimeout(()=>{ el.style.opacity = 0; el.setAttribute('aria-hidden','true'); }, 1600);
}
