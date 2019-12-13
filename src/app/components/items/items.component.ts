import { Component, OnInit } from '@angular/core';
import { ItemService} from '../../services/item.service';
import { Item } from '../../models/Item';
import { BlockchainService} from '../../services/blockchain.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public pendingTransactions = [];
  public miningInProgress = false;
  public justAddedTx = false;

  items: Item[];

  // tslint:disable-next-line:max-line-length
  constructor(private blockchainService: BlockchainService, private router: Router, private route: ActivatedRoute, private itemService: ItemService) {
    this.pendingTransactions = blockchainService.getPendingTransactions();
    console.log('pending transaction is :', this.pendingTransactions);
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
       console.log(items);
      this.items = items;
    });
  }

  minePendingTransactions() {
    this.miningInProgress = true;
    this.blockchainService.minePendingTransactions();
    this.miningInProgress = false;
    this.router.navigate(['/']);
  }


}
