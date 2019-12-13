import { Component, OnInit, Input } from '@angular/core';
import {BlockchainService, IWalletKey} from '../../services/blockchain.service';
import { ItemService} from '../../services/item.service';
import { Item } from '../../models/Item';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  @Input()
  public transactions = [];
  public ownWalletKey: IWalletKey;
  constructor(public blockchainService: BlockchainService) {

  }
  ngOnInit() {
  }
}
