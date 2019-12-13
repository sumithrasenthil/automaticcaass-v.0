import { Component, OnInit } from '@angular/core';
import { ItemService} from '../../services/item.service';
import {Item} from '../../models/Item';
import { BlockchainService } from '../../services/blockchain.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-automatic-update',
  templateUrl: './automatic-update.component.html',
  styleUrls: ['./automatic-update.component.scss']
})
export class AutomaticUpdateComponent implements OnInit {
  public pendingTransactions = [];
  public miningInProgress = false;
  public justAddedTx = false;
  public selectedBlock = null;
  items: Item[];
  // tslint:disable-next-line:max-line-length
  constructor(private blockchainService: BlockchainService, private router: Router, private route: ActivatedRoute , private itemService: ItemService) {
    this.pendingTransactions = blockchainService.getPendingTransactions();

  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('addedTx')) {
      this.justAddedTx = true;

      setTimeout(() => {
        this.justAddedTx = false;
      }, 4000);
    }
  }

  minePendingTransactions() {
    this.miningInProgress = true;
    this.blockchainService.minePendingTransactions();
    this.miningInProgress = false;
    this.router.navigate(['/']);
  }
  showTransactions(block) {
    console.log('the blocks are:', block);
    this.selectedBlock = block;
    return false;
  }
}
