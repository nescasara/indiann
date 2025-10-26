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
}
