import { Component, OnInit, Input } from '@angular/core';

import { BlockchainService } from '../../services/blockchain.service'; // import the blockchain service (access to the backend).
@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {

  public blocks = []; // to store all the blocks.
  public selectedBlock = null; // for the selected blocks.


  // getting the blockchain service module form the bockchainservice.ts file.
  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.blockchainInstance.chain;  // getting all the blocks from the backend.
    this.selectedBlock = this.blocks[1];
    console.log(this.blocks);
  }

  ngOnInit() {
  }

  showTransactions(block) {
    console.log('the blocks are:', block);
    this.selectedBlock = block;
    return false;
  }

  blockHasTx(block) {
    return block.transactions.length > 0;
  }

  selectedBlockHasTx() {
    return this.blockHasTx(this.selectedBlock);
  }

  isSelectedBlock(block) {
    return this.selectedBlock === block;
  }

  getBlockNumber(block) {
    return this.blocks.indexOf(block) + 1;
  }
}
